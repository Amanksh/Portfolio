import React from "react";
import "../index.css";

export const SkillCompo = ({ img, heading, size }) => {
  return (
    <div className="p-3 card-front hover:-translate-y-2 transition-all duration-150  bg-card bg-heading flex justify-center items-center flex-col gap-3 shadow-lg shadow-btncolor">
      <img
        src={img}
        alt="#"
        className="w-[150px]"
        style={{ width: `${size}px` }}
      />
      <h1 className="font-bold sm:text-3xl text-xl  font-sans">{heading}</h1>
    </div>
  );
};
