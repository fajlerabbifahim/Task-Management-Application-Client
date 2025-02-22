const AddTaskModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center animate-fade-in">
      <div className="bg-white p-6 rounded-lg shadow-lg text-black w-1/3">
        <h2 className="text-xl font-bold mb-4">Add New Task</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
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
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter task description"
            />
          </div>
          <div className="mb-4">
            {/* category */}
            <input type="text" value={"todo"} className="hidden" />
            {/* time stamp  */}
            <input type="text" value={"todo"} className="hidden" />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
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
