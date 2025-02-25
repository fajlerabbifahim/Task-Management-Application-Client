import { FaClock, FaEdit, FaTrash } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const TaskCard = ({ title, description, timestamp, id }) => {
  const axiosPublic = useAxiosPublic();

  const handleDeleteTask = (id) => {
    console.log("delete this id", id);

    axiosPublic
      .delete(`/delete/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.error("Error deleting task:", e);
      });
  };

  return (
    <div
      draggable
      className="m-4 p-4 rounded-lg shadow-xl bg-gradient-to-b from-[#28632b] to-[#022404] border  max-w-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
    >
      {/* Title Section */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <button className="text-[#C8E6C9] hover:text-white transition duration-200">
          <FaEdit size={18} />
        </button>
      </div>

      {/* Description */}
      <p className="text-[#E8F5E9]  text-sm mb-3">{description}</p>

      {/* Footer: Timestamp & Category */}
      <div className="flex justify-between items-center">
        <div className="flex items-center text-[#9fd166] text-xs">
          <FaClock className="mr-1" />
          {timestamp}
        </div>

        <button
          onClick={() => handleDeleteTask(id)}
          className="text-red-500 hover:text-red-600 transition duration-200"
        >
          <FaTrash size={16} />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
