import { toast, Toaster } from "react-hot-toast";
import React, { useState } from "react";
import logoimage from "../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../Context/UserContext";
const logout = () => {
  localStorage.removeItem("accessToken");
  toast.success("successfully logged out");
  setTimeout(() => {
    window.location = "/";
  }, 1000);
};

const Navbar = () => {
  let a = useContext(UserContext);


  const [isOpen, setIsOpen] = useState(false);
  const [openacc, setopenacc] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky z-50 top-0">
      {a?.status && openacc && (
        <div
          className={`z-10 `}
          onClick={() => setopenacc((prev) => !prev)}
          onMouseLeave={() => setopenacc(false)}
        >
          <ul className="w-[112px] bg-blue-100 px-4 py-2 rounded absolute right-14 top-[52px]  text-sm">
            <li onClick={logout} className="cursor-pointer hover:font-bold font-semibold">
              Logout
            </li>
            <Link to={'myaccount'}><li className="cursor-pointer hover:font-bold font-semibold">My Account</li></Link>
            
          </ul>
        </div>
      )}
      <Toaster />
      <div className=" mx-auto px-4 sm:px-6 z-50 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {!a?.status ? (
            <Link
              to={"/login"}
              className="absolute md:right-0 right-10 bg-gray-900 hover:bg-gray-700 text-white hover:text-gray-400 rounded-md p-2"
            >
              Login
            </Link>
          ) : (
            <button
            onMouseOver={()=>setopenacc(true)}
              onClick={() => setopenacc(!openacc)}
              className="absolute md:right-0 right-10  text-black hover:text-gray-800 rounded-md p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 text-blue-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
          )}
          <div className="flex items-center ">
            <a href="/" className="flex-shrink-0">
              <img
                className="h-12 w-48 mt-px"
                src={logoimage}
                alt="Skill Earner Logo"
              />
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to={"/courses"}
                  href="#"
                  className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Courses
                </Link>
                <Link
                  to={"/about"}
                  href="#"
                  className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </Link>
                <Link
                  to={"/contact"}
                  href="#"
                  className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <p className="text-xl px-3 italic font-bold text-indigo-600  ">
            Hello! {a?.data?.name}
          </p>
          <Link
            to={"/"}
            className="text-gray-900 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to={"/courses"}
            className="text-gray-900 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            Courses
          </Link>
          <Link
            to={"/about"}
            className="text-gray-900 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            About Us
          </Link>
          <Link
            to={"/contact"}
            className="text-gray-900 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
