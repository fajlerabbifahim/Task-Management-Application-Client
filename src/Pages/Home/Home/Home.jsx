import { useEffect, useState } from "react";
import TaskCard from "../../../Components/TaskCard/TaskCard";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import useTask from "../../../Hooks/useTask";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [fetchedTasks, isLoading, refetch] = useTask();
  const axiosPublic = useAxiosPublic();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (fetchedTasks) {
      setTasks(fetchedTasks);
    }
  }, [fetchedTasks]);

  const handleDragEnd = async (result) => {
    if (!result.destination) return;

    const { draggableId, destination } = result;

    const updatedTasks = tasks.map((task) =>
      task._id === draggableId
        ? { ...task, category: destination.droppableId }
        : task
    );
    setTasks(updatedTasks);

    try {
      await axiosPublic.patch(`/task/${draggableId}`, {
        category: destination.droppableId,
      });

      refetch();
    } catch (error) {
      console.error("Error updating task category:", error);
    }
  };

  if (isLoading) return <h1>Loading......</h1>;

  return (
    <div className=" bg-gradient-to-b bg-[#E8F5E9] text-[#1B5E20] p-4 h-full pt-28">
      <div className="flex justify-center pb-10">
        <button
          onClick={openModal}
          className="text-xl border bg-gradient-to-b from-[#28632b] to-[#022404] text-white px-6 py-2 rounded-lg"
        >
          Add Task
        </button>
      </div>
      <AddTaskModal
        isOpen={isModalOpen}
        onClose={closeModal}
        refetch={refetch()}
      />

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6">
          {["todo", "inProcess", "done"].map((category) => (
            <Droppable key={category} droppableId={category}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="border-2 border-[#A5D6A7] rounded-lg p-4"
                >
                  <h1 className="text-center font-bold text-3xl pb-6 pt-6 border-b-2 border-[#A5D6A7]">
                    {category === "todo"
                      ? "TODO"
                      : category === "inProcess"
                      ? "In Process"
                      : "Done"}
                  </h1>
                  {tasks
                    .filter((task) => task.category === category)
                    .map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={task._id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="mt-2"
                          >
                            <TaskCard
                              title={task.title}
                              description={task.description}
                              timestamp={task.timeStamp}
                              id={task._id}
                              refetch={refetch}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Home;
