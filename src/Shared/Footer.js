import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 py-4 text-center">
        <p className="text-gray-100 text-base">all rights reserved by Arif Ahammad {(new Date().getFullYear())}</p>
    </div>
  );
};

export default Footer;