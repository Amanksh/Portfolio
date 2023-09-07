import React from "react";
import "../index.css";
const Cards = ({ title, link, img, code }) => {
  return (
    <div className="bg-[#fff] p-3 text-primary rounded-lg w-[80%] sm:w-[300px] m-10 shadow-lg shadow-btncolor text-center">
      <div className="mb-3">
        <img src={img} alt="" />
      </div>
      <h1 className="text-xl font-bold font-playfair mt-2 mb-3">{title}</h1>
      <a
        href={code}
        target="_blank"
        type="button"
        className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold text-red-500 hover:text-white bg-btncolor/40 hover:bg-btncolor hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
      >
        Code
      </a>
      <a
        href={link}
        target="_blank"
        type="button"
        className="py-2 px-4 inline-flex ml-2 justify-center items-center gap-2 rounded-md  font-semibold text-red-500 hover:text-white bg-btncolor/40 hover:bg-btncolor hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
      >
        Code
      </a>
    </div>
  );
};
export default Cards;
