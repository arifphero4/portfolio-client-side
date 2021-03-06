import React, { useState } from "react";
import {
  FaAppStoreIos,
  FaBars,
  FaBlogger,
  FaExpandArrowsAlt,
  FaHome,
  FaPeopleCarry, FaPhoneAlt, FaProjectDiagram
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import Typical from 'react-typical'
// <Typical
//         steps={['Hello', 1000, 'Hello world!', 500]}
//         loop={Infinity}
//         wrapper="p"
//       />

const Header = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="bg-gray-800 relative header lg:fixed w-full py-3 lg:py-0">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link path="/" className="text-3xl font-bold text-gray-100">
          Arif Ahammad
        </Link>
        <span
          onClick={() => setOpen(!open)}
          className="text-3xl text-white toggle-menu"
        >
          {!open ? <FaBars /> : <FaExpandArrowsAlt />}
        </span>
        <div
          className={`${
            open ? "open-menu" : "menus"
          } transition-all duration-500 ease-linear bg-gray-800`}
        >
          <ul className="flex w-full  items-center justify-between flex-col lg:flex-row bg-gray-800">
            <li onClick={() => setOpen(!open)}>
              <HashLink
                smooth
                to="/home#home"
                className="flex items-center mr-6 text-lg text text-gray-100 py-5  font-bold"
              >
                <FaHome className="mr-2" />
                Home
              </HashLink>
            </li>
            <li onClick={() => setOpen(!open)}>
              <HashLink
                smooth
                to="/home#skills"
                className="flex items-center mr-6 text-lg text text-gray-100 py-5  font-bold"
              >
                <FaAppStoreIos className="mr-2" />
                Skills
              </HashLink>
            </li>
            <li onClick={() => setOpen(!open)}>
              <HashLink
                smooth
                to="/home#portfolio"
                className="flex items-center mr-6 text-lg text text-gray-100 py-5  font-bold"
              >
                <FaProjectDiagram className="mr-2" />
                Projects
              </HashLink>
            </li>
            <li
              onClick={() => setOpen(!open)}
              className="flex items-center mr-6 text-lg text text-gray-100 py-5  font-bold"
            >
              <FaPeopleCarry className="mr-2" />
              <Link to="/about">About</Link>
            </li>
            <li
              onClick={() => setOpen(!open)}
              className="flex items-center mr-6 text-lg text text-gray-100 py-5  font-bold"
            >
              <FaPhoneAlt className="mr-2" />
              <Link to="/contact">Contact</Link>
            </li>
            <li
              onClick={() => setOpen(!open)}
              className="flex items-center mr-6 text-lg text text-gray-100 py-5  font-bold"
            >
              <FaBlogger className="mr-2" />
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
