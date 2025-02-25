import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const UpdateTaskModal = ({ isOpen, onClose, title, description, id }) => {
  const axiosPublic = useAxiosPublic();
  if (!isOpen) return null;

  const { register, handleSubmit, reset } = useForm();

  const handleUpdateTask = (data) => {
    const updatedTask = {
      title: data.title,
      description: data.description,
    };

    axiosPublic
      .put(`/task/${id}`, updatedTask)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          reset();
          onClose(); // Modal close after update
        }
      })
      .catch((error) => {
        console.error("Update failed:", error);
      });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center animate-fade-in p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg text-black w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-lg md:text-xl font-bold mb-4 text-center">
          Update The Task
        </h2>
        <form onSubmit={handleSubmit(handleUpdateTask)}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              {...register("title", { required: true })}
              defaultValue={title}
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
              defaultValue={description}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter task description"
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
              Update Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTaskModal;
