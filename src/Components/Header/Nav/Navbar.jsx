import React from "react";
import BiggLogo from "../../../assets/whiteBiggLogo.png";
const Navbar = () => {
  return (
    <div className="navbar bg-[#222222] shadow-sm text-[white] p-[5px]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#272727] rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>

        <a className=" w-[40px] cursor-pointer hover:scale-[1.1] transition-all duration-400">
          <img src={BiggLogo} alt="Bigg Logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:bg-[#3d3d3d] transition-all duration-500">
            <a>Item 1</a>
          </li>
          <li className="hover:bg-[#3d3d3d] transition-all duration-500">
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-[#272727]">
                <li className="hover:bg-[#464646] rounded-[10px]">
                  <a>Submenu 1</a>
                </li>
                <li className="hover:bg-[#464646] rounded-[10px]">
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li className="hover:bg-[#3d3d3d] transition-all duration-500">
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
