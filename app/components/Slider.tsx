"use client";
import slide1 from "../../public/slider-1-1600x800.jpg.webp";
import slide2 from "../../public/slider-2-1600x800.jpg.webp";
import Image from "next/image";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className=" h-[34vh] md:h-[80vh]">
        <Image src={slide1} alt="slide1" />
        <Carousel.Caption className=" !absolute !bottom-5 !left-20 md:!bottom-20 md:!left-36  " >
          <div className="bg-black px-2 py-1 md:px-10 md:py-3 w-max bg-opacity-75 flex flex-col md:gap-1" >

            <div className="uppercase text-sm text-white border border-orange-400 bg-orange-400 block mr-auto px-1 md:px-3 md:py-1 hover:bg-transparent hover:text-orange-700 hover:border hover:border-orange-400 ">
              <span className="uppercase " >Travel</span>
            </div>

            <h1 className=" text-xs md:text-4xl font-bold text-white mb-0 " >Travel, Love, Live</h1>

            <p className="font-semibold text-start mb-0 text-sm " >29 October, 2017</p>

          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className=" h-[34vh] md:h-[80vh]">
        <Image src={slide2} alt="slide2" className="w-full" />
        <Carousel.Caption className=" !absolute !bottom-5 !left-20 md:!bottom-20 md:!left-36  " >
          <div className="bg-black px-2 py-1 md:px-10 md:py-3 w-max bg-opacity-75 flex flex-col md:gap-1" >

            <div className="uppercase text-sm text-white border border-orange-400 bg-orange-400 block mr-auto px-1 md:px-3 md:py-1 hover:bg-transparent hover:text-orange-700 hover:border hover:border-orange-400 ">
              <span className="uppercase " >Travel</span>
            </div>

            <h1 className=" text-xs md:text-4xl font-bold text-white mb-0 " >Travel, Love, Live 2</h1>

            <p className="font-semibold text-start mb-0 text-sm " >29 October, 2017 2</p>

          </div>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default ControlledCarousel;