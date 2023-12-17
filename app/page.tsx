import React from 'react'
import Slider from './components/Slider'
import About from './components/About'
import Service from './components/Service'
import Portfolio from './components/Portfolio'
import Clients from './components/Clients'
import slide1 from '../public/slide-1.jpg'
import slide2 from '../public/slide-2.jpg'
import slide3 from '../public/slide-3.jpg'
import ScrollToTop from "./components/ScrollToTop";

const Home = () => {

  return (
    <>
      <Slider className="rounded-none h-100vh " href1={slide1} href2={slide2} href3={slide3} overlayDiv=" hidden z-10 bg-gray-950 bg-opacity-75 absolute  m-auto  w-7/12 h-fit border-t-4 p-1 sm:p-5 border-t-lime-500 sm:flex flex-col gap-3" />
      <About />
      <Service />
      <Portfolio />
      <Clients />
      <ScrollToTop />
    </>
  )
}

export default Home