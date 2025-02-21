import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 text-white p-4 ">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold">Task Management</div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>

          {/* Menu Items */}
          <ul
            className={`md:flex gap-6 absolute md:static top-16 left-0 w-full md:w-auto  p-4 md:p-0 transition-transform ${
              isOpen ? "block" : "hidden"
            } md:flex`}
          >
            <li className="cursor-pointer hover:underline">Add Task </li>
          </ul>

          {/* Login Button */}
          <div className="hidden md:block">
            <button className="bg-white text-black px-4 py-2 rounded-sm hover:bg-gray-200">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* <div className="pt-16"></div> */}
    </>
  );
};

export default Navbar;
