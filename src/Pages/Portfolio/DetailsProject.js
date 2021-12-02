import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsProject = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/folioItems/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="container mx-auto px-4 py-32 grid md:grid-cols-2 items-center">
        <div className="max-w-4xl overflow-y-scroll">
          <img src={item.img} alt="" />
        </div>
        <div>
          <div className="text-gray-100 rounded-xl py-8 text-center py-12 md:relative md:-left-16 mt-5 md:mt-0 bg-gray-900 p-12">
            <h3 className="text-gray-100 text-2xl font-normal  transform scale-100 hover:scale-105 transition-all duration-300 ease-linear">
              {item.name}
            </h3>
            <p className=" transform scale-100 py-4 hover:scale-105 transition-all duration-300 ease-linear">
              {item.describe}
            </p>
            <div className="flex items-center justify-between px-3">
            <a
              className="py-2 px-5 border-2 border-gray-100 hover:border-yellow-500 transition-all duration-300 ese-linear inline-block text-gray-100 hover:bg-yellow-900 transform scale-100 hover:scale-105"
              // href={item.liveLink} target="_blank"
            >
              Live site
            </a>
            <a
              href={item.codeLink}
              target="_blank"
              className="py-2 px-5 border-2 border-gray-100 hover:border-yellow-500 transition-all duration-300 ese-linear inline-block text-gray-100 hover:bg-yellow-900 transform scale-100 hover:scale-105"
            >
              Github
            </a>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default DetailsProject;
