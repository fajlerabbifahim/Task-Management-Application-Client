import moment from "moment";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useUser from "../../../Hooks/useUser";

const AddTaskModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const currentTimeStamp = moment().format("DD MMMM YYYY, h:mm: A");
  const axiosPublic = useAxiosPublic();
  const [userData] = useUser();
  const { register, handleSubmit, reset } = useForm();
  const handleAddTask = (data) => {
    const task = {
      title: data.title,
      description: data.description,
      category: data.category,
      timeStamp: data.timeStamp,
      addedBy: userData.email,
    };
    axiosPublic.post("/task", task).then((res) => {
      if (res.data.acknowledged) {
        reset();
      }
    });
  };
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center animate-fade-in p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg text-black w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-lg md:text-xl font-bold mb-4 text-center">
          Add New Task
        </h2>
        <form onSubmit={handleSubmit(handleAddTask)}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              {...register("title", { required: true })}
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter task title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              {...register("description", { required: true })}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter task description"
            />
          </div>
          <div className="mb-4 hidden">
            <input
              {...register("category", { required: true })}
              type="text"
              value={"todo"}
            />
            <input
              {...register("timeStamp", { required: true })}
              type="text"
              value={currentTimeStamp}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 bg-gray-500 text-white rounded text-sm md:text-base"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-2 bg-gradient-to-b from-[#28632b] to-[#022404] text-white rounded text-sm md:text-base"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
