import React from 'react';
import arifImg from '../Image/arif.png';

const Home = () => {
  return (
    <div id="home" className="py-20 bg-gray-900 home-section">
       <div className="container mx-auto pt-10 md:flex md:items-center md:justify-between px-3" style={{minHeight: '90vh'}}>
           <div className="w-full md:w-6/12 text-center flex items-center justify-center flex-col h-96">
             <h3 className="text-xl font-bold text-gray-100  transition-all duration-300 ease-linear transform scale-100 hover:scale-105 hover:text-yellow-400">WELCOME TO MY WORLD !</h3>
             <h1 className="text-2xl sm:text-4xl lg:text-6xl py-3 font-bold  transition-all duration-300 ease-linear transform scale-100 hover:scale-105 text-gray-100 hover:text-yellow-400">Hello, I'M <br /> <span className="text-yellow-600">Arif Ahammad</span></h1>
             <span className="text-lg py-3 font-normal text-yellow-400 transition-all duration-300 ease-linear transform scale-100 hover:scale-105">“To win big, you sometimes have to take big risks.” --- Bill Gates</span>
             <a href="https://drive.google.com/uc?export=download&id=1EyWM38RJacMhf9YB1KcrjLRsGqIdF7EM"  className="py-2 px-5 border-2 border-gray-100 hover:border-yellow-600 inline-block text-gray-100 font-normal text-lg mt-2 hover:text-yellow-600 transition-all duration-300 ease-linear transform scale-100 hover:scale-105">My resume</a>
           </div>
           <div className="w-full md:w-6/12 text-right">
             <img className="w-full md:w-8/12 ml-auto" src={arifImg} alt="" />
           </div>
       </div>
    </div>
  );
};

export default Home;