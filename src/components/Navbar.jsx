import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdHome, IoIosBrowsers, IoMdClose } from "react-icons/io";
import { MdWebStories, MdOutlineSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="max-w-[1640px] mx-auto flex items-center justify-between py-4 px-6 md:px-16 lg:px-20 border-b-2 ">
      {/* Left Side */}
      <div className="flex items-center">
        <Link
          to="/"
          className="font-poppins font-semibold text-lg lg:text-xl text-primary"
        >
          <span className="text-secondary">Stay</span>Cation.
        </Link>
      </div>
      {/* Right Side */}
      <div className="hidden sm:flex">
        <ul className="flex gap-8">
          <li className="text-primary hover:text-secondary font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="text-primary hover:text-secondary font-medium">
            Browse By
          </li>
          <li className="text-primary hover:text-secondary font-medium">
            Stories
          </li>
          <li className="text-primary hover:text-secondary font-medium">
            Agents
          </li>
        </ul>
      </div>

      {/* Mobile Hamburger */}
      <div className="flex sm:hidden">
        <IoMenu
          size={25}
          onClick={() => {
            setNav(!nav);
          }}
          className="text-primary cursor-pointer"
        />
      </div>

      {/* Overlay */}
      {nav ? (
        <div className="w-full h-screen bg-black/30 fixed z-10 top-0 left-0 sm:hidden"></div>
      ) : (
        ""
      )}

      {/* Sidebar */}
      <div
        className={
          nav
            ? "w-[200px] h-screen fixed top-0 right-0 z-10 bg-white shadow-md pt-8 px-4 sm:hidden duration-300"
            : "w-[200px] h-screen fixed top-0 right-[-100%] z-10 bg-white duration-300"
        }
      >
        <div className="absolute top-4 right-4">
          <IoMdClose size={25} onClick={() => {setNav(!nav)}} className="text-primary cursor-pointer"/>
        </div>
        <ul className="flex flex-col gap-8 pt-8">
          <li className="text-primary hover:text-secondary font-medium flex gap-2">
            <IoMdHome size={25} />
            <p>Home</p>
          </li>
          <li className="text-primary hover:text-secondary font-medium flex gap-2">
            <IoIosBrowsers size={25} />
            <p>Browse By</p>
          </li>
          <li className="text-primary hover:text-secondary font-medium flex gap-2">
            <MdWebStories size={25} />
            <p>Stories</p>
          </li>
          <li className="text-primary hover:text-secondary font-medium flex gap-2">
            <MdOutlineSupportAgent size={25} />
            <p>Agents</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
