import { useState } from "react";
import Logo from "../assets/msl.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  function navHandler() {
    setNav(!nav);
  }

  return (
    <div className="fixed bg-[#050a30] w-full h-[100px]  flex justify-around items-center">
      <div>
        <img src={Logo} alt="my logo " className="w-[100px] lg:w-[150px]" />
      </div>

      {/* menu */}
      <ul className="hidden md:flex gap-4 text-white text-xl font-semibold ">
        <li >
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*hamburger */}
      <div
        onClick={navHandler}
        className="md:hidden text-white text-3xl cursor-pointer z-10"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#050a30] flex flex-col gap-5 justify-center items-center text-white text-3xl font-semibold"
        }
       
      >
        <li>
          <Link  onClick={navHandler} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link  onClick={navHandler} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link  onClick={navHandler} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link  onClick={navHandler} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link  onClick={navHandler} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] my-1 hover:ml-[-10px] duration-300 bg-blue-900 rounded-full">
            <a
              className="flex justify-around items-center w-full text-gray-300"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] my-1 hover:ml-[0px] duration-300 bg-blue-900 rounded-full">
            <a
              className="flex justify-around items-center w-full text-gray-300"
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] my-1 hover:ml-[0px] duration-300 bg-blue-900 rounded-full">
            <a
              className="flex justify-around items-center w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] my-1 hover:ml-[0px] duration-300 bg-blue-900 rounded-full">
            <a
              className="flex justify-around items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
