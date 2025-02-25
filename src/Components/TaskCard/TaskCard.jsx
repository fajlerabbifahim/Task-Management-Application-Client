import { FaClock, FaEdit, FaTrash } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const TaskCard = ({ title, description, timestamp, id, refetch }) => {
  const axiosPublic = useAxiosPublic();

  const handleDeleteTask = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#28632b", // Green color from previous
      cancelButtonColor: "#022404", // Dark green color from previous
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(`/delete/${id}`)
          .then((res) => {
            if (res.data.acknowledged) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                confirmButtonColor: "#28632b",
              });
              refetch();
            }
          })
          .catch((e) => {
            console.error("Error deleting task:", e);
          });
      }
    });
  };

  return (
    <div
      draggable
      className="m-4 p-4 rounded-lg shadow-xl bg-gradient-to-b from-[#28632b] to-[#022404] border  max-w-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
    >
      {/* Title Section */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
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
