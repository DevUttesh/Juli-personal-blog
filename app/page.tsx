import React from "react";
import Topbar from "./components/Topbar";
import Logo from "./components/Logo";
import NavbarComp from "./components/NavbarComp";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Slider from "./components/Slider";

const page = () => {
  return (
    <>
      <Topbar/>
      <Logo/>
      <NavbarComp/>
      <Slider/>
      <div className="container m-auto flex flex-col lg:flex-row gap-10 justify-center" >
        <Home/>
        <Sidebar/>
      </div>
      <Footer/>
    </>
  );
};

export default page;
