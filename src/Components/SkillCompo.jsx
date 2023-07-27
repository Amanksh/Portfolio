import React from "react";

export const SkillCompo = ({ img, heading }) => {
  return (
    <div className="p-5 bg-heading flex justify-center items-center flex-col gap-5 shadow-lg">
      <img src={img} alt="#" className="w-[150px]" />
      <h1 className="font-bold text-3xl">{heading}</h1>
    </div>
  );
};
