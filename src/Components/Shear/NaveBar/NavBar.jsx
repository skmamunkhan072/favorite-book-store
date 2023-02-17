/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Link } from "react-router-dom";
// react icons
import { GiBookAura } from "react-icons/gi";
import { BiUserCircle } from "react-icons/bi";
import { BsBookmarkHeart } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { CiDark } from "react-icons/ci";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [smallProfileMenu, SetSmallProfileMenu] = useState(false);
  const [currentTheme, SetCurrentTheme] = useState(false);
  const them = document.documentElement;

  // them handel function
  const themeChenge = () => {
    SetCurrentTheme(!currentTheme);
    if (them.getAttribute("data-theme") === "dark") {
      them.setAttribute("data-theme", "light");
    } else {
      them.setAttribute("data-theme", "dark");
    }
  };
  const naveMenu = (
    <>
      <li>
        <Link
          to="home"
          className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          to=""
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5"
        >
          Features
        </Link>
      </li>

      <li>
        <Link
          to=""
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5"
        >
          Pricing
        </Link>
      </li>

      <li>
        <Link
          to=""
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5"
        >
          Blog
        </Link>
      </li>

      <li className="flex items-center  justify-center cursor-pointer">
        <div className="avatar">
          <div className="w-7 rounded-full">
            <img
              onClick={() => SetSmallProfileMenu(!smallProfileMenu)}
              src="https://i.ibb.co/1RxyTLZ/people3.png"
              alt="This is profile photo"
            />

            <i className="w-full h-full flex items-center  justify-center  bottom-1  border-orange-600	">
              <BiUserCircle className="text-3xl" />
            </i>
          </div>
        </div>
      </li>
    </>
  );

  const navLogo = (
    <>
      <i className="text-4xl text-teal-accent-400">
        <GiBookAura className="text-fuchsia-600" />
      </i>
      <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
        Favorite Book Store
      </span>
    </>
  );
  return (
    <section>
      <nav className="bg-gray-900">
        <div className="px-4  py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center  justify-between relative">
            <Link
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center "
            >
              {navLogo}
            </Link>
            <ul className="flex items-center  hidden space-x-8 lg:flex justify-center text-gray-300">
              {naveMenu}
            </ul>
            <div
              className={`min-w-[250px] min-h-[300px] absolute top-14 right-[-2rem] rounded bg-[#150F2D] ${
                smallProfileMenu ? "" : "hidden"
              }`}
            >
              <div className="p-2 pt-4 mb-3">
                <div className="avatar">
                  <div className="w-20 rounded-full">
                    <img src="https://i.ibb.co/1RxyTLZ/people3.png" />
                  </div>
                </div>
                <h2 className="text-gray-300">sk Mamun Khan</h2>
                <h4 className="text-gray-300">Role: user</h4>
              </div>
              <hr />
              <div
                className="text-start text-white"
                onClick={() => SetSmallProfileMenu(false)}
              >
                <ul className="text-[0.875rem] py-3">
                  <li className="hover:bg-black py-2 px-4 flex justify-start items-center cursor-pointer">
                    <BsBookmarkHeart className="text-[0.875rem] mr-3" />
                    <p>Bookmark</p>
                  </li>
                  <li
                    className="hover:bg-black py-2 px-4 flex justify-start items-center cursor-pointer"
                    onClick={themeChenge}
                  >
                    <CiDark className="text-[1rem] mr-3" /> <p>Dark Mode</p>
                  </li>
                  <li className="hover:bg-black py-2 px-4 flex justify-start items-center cursor-pointer">
                    <FiLogOut className="text-[0.875rem] mr-3" /> <p>Logout</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">
                  <div className="p-5 bg-white border rounded shadow-sm">
                    <div className="flex items-center  justify-between mb-4">
                      <div>
                        <Link
                          to="home"
                          aria-label="Company"
                          title="Company"
                          className="inline-flex items-center "
                        >
                          {navLogo}
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 text-gray-600"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">{naveMenu}</ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
