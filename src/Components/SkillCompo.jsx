import React from "react";

export const SkillCompo = ({ img, heading }) => {
  return (
    <div className="p-5  bg-heading flex justify-center items-center flex-col gap-3 shadow-lg">
      <img src={img} alt="#" className="w-[150px]" />
      <h1 className="font-bold sm:text-3xl text-xl  font-sans">{heading}</h1>
    </div>
  );
};
