import { useState } from "react";
import { FaUser } from "react-icons/fa";
import useUser from "../../Hooks/useUser";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { logout } = useAuth();
  const [userData] = useUser();

  const user = userData || {};

  return (
    <>
      <nav className="fixed top-0 w-full backdrop-blur-xl text-[#1B5E20] p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="text-xl font-bold">Task Management</div>
          </div>

          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2"
            >
              <img
                src={user?.photo || "https://via.placeholder.com/40"}
                alt="User"
                className="w-10 h-10 rounded-full border"
              />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4">
                <>
                  <p className="font-bold text-lg">
                    {user?.name || "Unknown User"}
                  </p>
                  <p className="text-gray-600">{user?.email || "No Email"}</p>
                  <hr className="my-2" />
                  <button
                    type="button"
                    className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
                  >
                    <Link onClick={() => logout()} to="/login">
                      {" "}
                      Log Out
                    </Link>
                  </button>
                </>
              </div>
            )}
          </div>
        </div>

        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-gray-800 text-white p-4 md:hidden">
            <li className="cursor-pointer hover:underline py-2">Add Task</li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
