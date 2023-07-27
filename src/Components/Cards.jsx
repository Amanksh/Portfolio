import React from "react";
import project1 from "../assets/project1.png";
const Cards = () => {
  return (
    <div className=" bg-primary border border-gray-200 rounded-lg shadow-lg max-w-sm  ">
      <img className="rounded-t-lg w-[100%]" src={project1} alt="#" />

      <div className="p-5 text-left">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 ">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-bold hover:text-headColor text-center text-white bg-btncolor rounded-lg hover:bg-yellow focus:ring-4 focus:outline-none focus:ring-blue-300  "
        >
          Live Link
        </a>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-bold hover:text-headColor text-center text-white bg-btncolor ml-2 rounded-lg hover:bg-yellow focus:ring-4 focus:outline-none focus:ring-blue-300  "
        >
          CODE
        </a>
      </div>
    </div>
  );
};
export default Cards;
