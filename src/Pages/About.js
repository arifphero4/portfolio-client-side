import React from 'react';
import { Link } from 'react-router-dom';
import arifImg from '../Image/arif.png';

const About = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-900 py-32">
         <div className="container mx-auto px-4 grid items-center grid-cols-1 md:grid-cols-2 gap-8">
            <div>
               <img className="w-11/12 transition-all duration-300 ease-linear transform scale-100 hover:scale-105" src={arifImg} alt="" />
            </div>
            <div>
               <h1 className="text-gray-100 font-bold text-3xl transition-all duration-300 ease-linear transform scale-100 hover:scale-105">Hello! I'm Arif Ahammad</h1>
               <h3 className="text-yellow-500 font-bold text-xl transition-all duration-300 ease-linear transform scale-100 hover:scale-105">I'm a Frond-End web developer</h3>
               <p className="py-2 text-gray-100 text-base transition-all duration-300 ease-linear transform scale-100 hover:scale-105">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, illo libero tempora harum id iure atque officiis fugit expedita aliquam nemo modi repellat alias natus, illum quam culpa nisi quo?</p>
               <p className="py-2 text-gray-100 text-base transition-all duration-300 ease-linear transform scale-100 hover:scale-105">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus itaque ipsa repudiandae expedita! Fuga sed adipisci quos expedita accusantium repellat numquam labore animi impedit perspiciatis quasi ex omnis iure, ab officia? Officiis reiciendis beatae nam sint quae quo dolorem eligendi.</p>
               <Link to="/contact" className="py-2 px-5 border-2 border-gray-100 hover:border-yellow-600 inline-block text-gray-100 font-normal text-lg mt-2 hover:text-yellow-600 transition-all duration-300 ease-linear transform scale-100 hover:scale-105">Hire me</Link>
            </div>
         </div>
      </div>
    </div>
  );
};

export default About;