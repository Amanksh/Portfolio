import React from "react";
import "../index.css";
import { set } from "react-hook-form";

export const SkillCompo = ({ img, heading, size, skills }) => {
  const [isHover, setIsHover] = React.useState(false);
  const showModal = () => {
    setIsHover(true);
  };
  return (
    <div
      className="p-3 skillcompo overflow-visible  card-front hover:-translate-y-2 transition-all duration-150  bg-card bg-heading flex justify-center items-center flex-col gap-3 shadow-lg shadow-btncolor relative z-10"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        src={img}
        alt="#"
        className="w-[150px]"
        style={{ width: `${size}px` }}
      />
      <h1 className="font-bold sm:text-3xl text-xl  font-sans">{heading}</h1>

      {isHover && (
        <div className=" modal bg-white bg-heading flex justify-center items-center flex-col gap-3 shadow-lg shadow-btncolor absolute top-[-50px] left-0 text-primary font-bold p-3 rounded-lg   z-50 transform min-w-max">
          <h1>Skills :</h1>
          <ul className="grid   text-left ">
            {skills.map((skill, index) => (
              <li key={index}>
                {"\u2022"} {skill}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
