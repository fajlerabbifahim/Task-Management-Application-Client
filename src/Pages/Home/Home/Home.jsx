import { useState } from "react";
import TaskCard from "../../../Components/TaskCard/TaskCard";

import AddTaskModal from "../AddTaskModal/AddTaskModal";
import useTask from "../../../Hooks/useTask";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [tasks, isLoading, refetch] = useTask();

  if (isLoading) return <h1>Loading......</h1>;
  return (
    <div className="bg-[#333333] bg-gradient-to-b from-[#333333] to-[#6d6e6f] text-white p-4 h-full pt-28">
      <div className="flex justify-center pb-10">
        <button
          onClick={openModal}
          className="text-xl border border-white px-6 py-2 rounded-lg"
        >
          Add Task
        </button>
      </div>
      <AddTaskModal isOpen={isModalOpen} onClose={closeModal} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6   ">
        <div className="border-2  rounded-lg">
          <h1 className="text-center text-3xl pb-6 pt-6 border-b-2 ">TODO</h1>
          {tasks.map((task) => (
            <TaskCard
              key={task._id}
              title={task.title}
              description={task.description}
              timestamp={task.timeStamp}
            />
          ))}
        </div>
        <div className="border-2  rounded-lg ">
          {" "}
          <h1 className="text-center text-3xl pb-6 pt-6 border-b-2 ">
            In Process
          </h1>
        </div>
        <div className="border-2  rounded-lg">
          {" "}
          <h1 className="text-center text-3xl pb-6 pt-6 border-b-2 ">Done</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
