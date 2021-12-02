import React, { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkill] = useState([]);
  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkill(data));
  }, []);
  return (
    <div id="skills" className="bg-gray-800 py-8" style={{ minHeight: "90vh" }}>
      <div className="container mx-auto py-5 text-center border-b-2 border-yellow-500 px-4">
        <h1 className="text-gray-100 text-3xl lg:text-6xl font-bold">
          My Professional <span className="text-yellow-500">Skills</span>
        </h1>
      </div>
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card p-8 flex items-center justify-center flex-col bg-gray-50 rounded-2xl hover:bg-yellow-900 transition-all duration-500 ease-linear transform scale-100 hover:scale-105">
              <img className="w-8/12  transition-all duration-500 ease-linear transform scale-100 hover:scale-105" src={skill.img} alt="" />
              <div className="skill-name text-xl font-bold mt-3 text-gray-800  transition-all duration-500 ease-linear transform scale-100 hover:scale-105">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
