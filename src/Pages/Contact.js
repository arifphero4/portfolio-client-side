import React from 'react';
import { FaFacebookF, FaGithubAlt, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
const Contact = () => {
  return (
    <div  className="bg-gray-900 pt-28 pb-20 min-h-screen ">
       <div className="flex items-center justify-center">
         <div className="w-full max-w-lg p-12 bg-gray-700">
       <h1 className="text-gray-50 text-3xl md:text-6xl text-center py-2">Contact me</h1>
       <div className="flex items-center justify-center flex-wrap py-3">
             <a target="_blank" href="/" className="transform scale-100 hover:scale-110 text-gray-100 flex items-center justify-center w-10 h-10 border-2 border-gray-100 mr-2 mt-2 cursor-pointer hover:bg-red-300 hover:border-red-300 smooth text-md hover:text-gray-900 "><FaFacebookF/></a>
             <a target="_blank" href="/" className="transform scale-100 hover:scale-110 text-gray-100 flex items-center justify-center w-10 h-10 border-2 border-gray-100 mr-2 mt-2 cursor-pointer hover:bg-red-300 hover:border-red-300 smooth text-md hover:text-gray-900 "><FaTwitter/></a>
             <a target="_blank" href="/" className="transform scale-100 hover:scale-110 text-gray-100 flex items-center justify-center w-10 h-10 border-2 border-gray-100 mr-2 mt-2 cursor-pointer hover:bg-red-300 hover:border-red-300 smooth text-md hover:text-gray-900 "><FaLinkedinIn/></a>
             <a target="_blank" href="/" className="transform scale-100 hover:scale-110 text-gray-100 flex items-center justify-center w-10 h-10 border-2 border-gray-100 mr-2 mt-2 cursor-pointer hover:bg-red-300 hover:border-red-300 smooth text-md hover:text-gray-900 "><FaGithubAlt/></a>
             <a target="_blank" href="/" className="transform scale-100 hover:scale-110 text-gray-100 flex items-center justify-center w-10 h-10 border-2 border-gray-100 mr-2 mt-2 cursor-pointer hover:bg-red-300 hover:border-red-300 smooth text-md hover:text-gray-900 "><FaInstagram/></a>
          </div>
          <form action="https://formspree.io/f/xbjwrkvn" method="POST">
            <input className="w-full py-1 px-3 border border-gray-300 bg-gray-900 mt-3" name="name" placeholder="Name" type="text" />
            <input className="w-full py-1 px-3 border border-gray-300 bg-gray-900 mt-3" name="email" placeholder="Email" type="email" />
            <input className="w-full py-1 px-3 border border-gray-300 bg-gray-900 mt-3" name="phone" placeholder="Phone" type="text" />
            <textarea className="w-full py-1 px-3 border border-gray-300 bg-gray-900 mt-3" name="message" rows="6" placeholder="Message..."></textarea>
            <button className="py-2 px-5 border-2 border-gray-100 hover:border-yellow-600 inline-block text-gray-100 font-normal text-lg mt-2 hover:text-yellow-600 transition-all duration-300 ease-linear transform scale-100 hover:scale-105" type="submit">Send</button>
          </form>
          </div>
       </div>
    </div>
  );
};

export default Contact;