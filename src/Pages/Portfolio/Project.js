import React from "react";
import { Link } from "react-router-dom";
import reactIcon from "../../Image/reactnew.png";

const Project = ({ item }) => {
  console.log(item);
  const { name, img, liveLink, describe, _id } = item;
  return (
    <div className="bg-gray-800 p-5 rounded-lg transition-all duration-300 ease-linear transform scale-100 hover:scale-105 overflow-hidden">
      <span
        className="absolute top-1 left-2 transform card-token"
      >
        Best project
      </span>
      <div className="h-80 rounded-lg overflow-hidden">
        <img
          className="rounded-lg transform scale-100 hover:scale-105 transition-all duration-300 ease-linear"
          src={img}
          alt={name}
        />
      </div>
      <div className="py-5 relative">
        <div className="absolute -top-5 -lef-5 w-full flex items-center justify-center">
          <img
            className="w-16 h-16 border-2 border-gray-100 rounded-full p-2 bg-gray-900 transform scale-100 hover:scale-105 transition-all duration-300 ease-linear"
            src={reactIcon}
            alt=""
          />
        </div>
        <div className="text-gray-100 py-8 text-center">
          <h3 className="text-gray-100 text-2xl font-normal  transform scale-100 hover:scale-105 transition-all duration-300 ease-linear">
            {name}
          </h3>
          <p className=" transform scale-100 hover:scale-105 transition-all duration-300 ease-linear">
            `{describe?.substring(0, 100)}...`
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between px-3">
        <a
          className="py-2 px-5 border-2 border-gray-100 hover:border-yellow-500 transition-all duration-300 ese-linear inline-block text-gray-100 hover:bg-yellow-900 transform scale-100 hover:scale-105"
          href={liveLink} target="_blank"
        >
          Live site
        </a>
        <Link
          className="py-2 px-5 border-2 border-gray-100 hover:border-yellow-500 transition-all duration-300 ese-linear inline-block text-gray-100 hover:bg-yellow-900 transform scale-100 hover:scale-105"
          to={`/details/${_id}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Project;
