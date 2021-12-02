import React, { useEffect, useState } from "react";
import Project from "./Project";

const Portfolios = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/folioItems/")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(items);
  return (
    <div className="bg-gray-900">
      <div className="container mx-auto py-5 text-center border-b-2 border-yellow-500 px-4">
        <h1 className="text-gray-100 text-3xl lg:text-6xl font-bold">
          Some Of My <span className="text-yellow-500">Projects</span>
        </h1>
      </div>
      <div className="container mx-auto py-8 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 px-6">
        {
          items.map(item=> <Project key={item._id} item={item} />)
        }
      </div>
    </div>
  );
};

export default Portfolios;
