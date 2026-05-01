import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span><Image
        src='/Nadia-logo.png'
        width={40}
        height={40}
        alt="sdf"
        className="rounded-full"
        /></span>
        <p className="text-green-900">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
