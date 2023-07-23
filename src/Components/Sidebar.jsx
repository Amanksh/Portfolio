import React from "react";
import "./Sidebar.css";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiBook } from "react-icons/bi";
import { FaCottonBureau } from "react-icons/fa";
import { AiOutlineContacts } from "react-icons/ai";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { AiOutlineFileSearch } from "react-icons/ai";
import head from "../assets/head.jpeg";
export const Sidebar = () => {
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 flex flex-col items-center gap-10 w-full">
          <img
            src={head}
            alt="#"
            className="rounded-full w-[100px] h-[100px] text-center"
          />
          <ul className="space-y-2 font-medium flex flex-col w-full gap-5">
            <li className=" rounded-lg shadow-sm ">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg "
              >
                <BiHomeAlt2 size={25} className="hover-icon" />
                <span className="ml-3">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg group "
              >
                <BiBook size={25} className="hover-icon" />
                <span className="flex-1 ml-3 whitespace-nowrap">About</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg"
              >
                <FaCottonBureau size={25} className="hover-icon" />
                <span className="flex-1 ml-3 whitespace-nowrap">Skills</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg"
              >
                <AiOutlineFileSearch size={25} className="hover-icon" />
                <span className="flex-1 ml-3 whitespace-nowrap">Projects</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg"
              >
                <AiOutlineSafetyCertificate size={25} className="hover-icon" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Certifications
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg"
              >
                <AiOutlineContacts size={25} className="hover-icon" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Contact me
                </span>
              </a>
            </li>
          </ul>
          <h1 className="mt-auto"> @Copyright</h1>
        </div>
      </aside>
    </div>
  );
};
