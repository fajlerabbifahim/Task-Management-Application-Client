import { FaClock, FaTag, FaEdit, FaTrash } from "react-icons/fa";

const TaskCard = ({ title, description, timestamp, category }) => {
  // Category Colors
  const categoryColors = {
    "To-Do": "bg-yellow-500",
    "In Progress": "bg-blue-500",
    Done: "bg-green-500",
  };

  return (
    <div className="p-4 rounded-lg shadow-md backdrop-blur-md bg-[#333333] bg-gradient-to-b from-[#333333] to-[#6d6e6f] border border-gray-600 max-w-md">
      {/* Title Section */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <button className="text-gray-300 hover:text-white">
          <FaEdit size={18} />
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-3">{description}</p>

      {/* Footer: Timestamp & Category */}
      <div className="flex justify-between items-center">
        <div className="flex items-center text-gray-400 text-xs">
          <FaClock className="mr-1" />
          {timestamp}
        </div>

        <div
          className={`flex items-center gap-2 text-xs text-white px-3 py-1 rounded-full ${categoryColors[category]}`}
        >
          <FaTag />
          {category}
        </div>

        <button className="text-red-400 hover:text-red-500">
          <FaTrash size={16} />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
