import React from "react";
import {
  Facebook,
  Instagram,
  Pinterest,
  Search,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";

const Topbar = () => {
  return (
    <nav className="flex justify-between items-center border-b ">
      <div className="border-r p-3 hidden lg:flex ">
        <span>Hello nice people, welcome to my blog</span>
      </div>

      <div className="border-r p-3 hidden md:flex flex-1 justify-start">
        <span>
          <a href="mailto:" className=" no-underline text-black " >contact@juliblog.com</a>
        </span>
      </div>

      <div className=" border-r w-full md:w-auto p-3 relative">
        <input type="text" className=" w-full h-full focus:outline-none " placeholder="Search" />
        <Search className="absolute right-4 top-4" />
      </div>

      <div className=" flex-1 hidden md:flex justify-center">
        <div className="flex gap-5 px-3" >
          <Facebook />
          <Instagram />
          <Twitter />
          <Youtube />
          <Pinterest />
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
