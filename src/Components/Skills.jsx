import React from "react";
import { SkillCompo } from "./SkillCompo";

import { skillsData } from "../ProjectsData/SkillsData";
export const Skills = () => {
  return (
    <div
      className="w-ful skills min-h-screen p-50 flex justify-center items-start bg-primary"
      id="skills"
    >
      <div className="text-headColor sm:w-[80%] mx-auto sm:mt-20 mt-20 p-10 text-center">
        <h1 className="font-bold font-sans sm:text-3xl text-3xl mb-8 inline-block border-b-4 border-btncolor ">
          SKILLS
        </h1>
        <div className="sm:p-5 p-2 grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-5">
          {/* <SkillCompo img={javascript} heading={"Javascript"} size={100} />
          <SkillCompo img={reactlogo} heading={"ReactJS"} />
          <SkillCompo img={python} heading={"Python"} />
          <SkillCompo img={node} heading={"NodeJS"} />
          <SkillCompo img={express} heading={"Express"} size={100} />
          <SkillCompo img={mongo} heading={"MongoDB"} />
          <SkillCompo img={cpp} heading={"C++"} />
          <SkillCompo img={aws} heading={"AWS"} />
          <SkillCompo img={java} heading={"Java"} size={100} /> */}
          {skillsData.map(
            (
              skill,
              index // Map over skillsData
            ) => (
              <SkillCompo
                key={index}
                img={skill.img}
                heading={skill.language}
                skills={skill.skills}
                size={100}
              /> // Pass skills as a prop
            )
          )}
        </div>
      </div>
    </div>
  );
};
