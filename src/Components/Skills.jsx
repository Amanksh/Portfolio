import React from "react";
import aws from "../assets/aws3.svg";
import { SkillCompo } from "./SkillCompo";
import reactlogo from "../assets/react.svg";
import python from "../assets/python.svg";
import node from "../assets/node.svg";
import mongo from "../assets/mongo.svg";
import cpp from "../assets/Cpp.svg";

export const Skills = () => {
  return (
    <div
      className="w-full h-screen p-50 flex justify-center items-start bg-primary"
      id="skills"
    >
      <div className="text-headColor sm:w-[80%] mx-auto sm:mt-20 mt-20 p-10 text-center">
        <h1 className="font-bold font-sans sm:text-3xl text-3xl mb-6 inline-block border-b-4 border-btncolor ">
          SKILLS
        </h1>
        <div className="sm:p-5 p-2 grid sm:grid-cols-3 grid-cols-2 gap-5">
          <SkillCompo img={aws} heading={"AWS"} />
          <SkillCompo img={reactlogo} heading={"ReactJS"} />
          <SkillCompo img={python} heading={"Python"} />
          <SkillCompo img={node} heading={"NodeJS"} />
          <SkillCompo img={mongo} heading={"MongoDB"} />
          <SkillCompo img={cpp} heading={"C++"} />
        </div>
      </div>
    </div>
  );
};
