import Image from "next/image";
import React from "react";
import author1 from "../../public/author-1-200x200.jpg.webp";
import rpost1 from "../../public/recent-post-1-150x200.jpg.webp";
import rpost2 from "../../public/recent-post-2-150x200.jpg.webp";
import rpost3 from "../../public/recent-post-3-150x200.jpg.webp";
import rpost4 from "../../public/recent-post-4-150x200.jpg.webp";
import ad1 from "../../public/advertise-1-400x500.jpg.webp";
import instaside1 from "../../public/instragram-side-1-150x150.jpg.webp";
import instaside3 from "../../public/instragram-side-3-150x150.jpg.webp";
import instaside4 from "../../public/instragram-side-4-150x150.jpg.webp";
import instaside5 from "../../public/instragram-side-5-150x150.jpg.webp";
import instaside6 from "../../public/instragram-side-6-150x150.jpg.webp";
import {
  Facebook,
  Instagram,
  Pinterest,
  Search,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";
import signature from "../../public/signature-image.png.webp";
import Link from "next/link";
import cat1 from "../../public/category-1-400x150.jpg.webp";
import cat2 from "../../public/category-2-400x150.jpg.webp";
import cat3 from "../../public/category-3-400x150.jpg.webp";
import cat4 from "../../public/category-4-400x150.jpg.webp";

const Sidebar = () => {
  return (

    <section className=" w-full lg:w-[30%] flex flex-col gap-10 my-10 relative ">
      <Image
        src={author1}
        alt=""
        className="absolute top-0 left-0 right-0 m-auto"
      />

      <div className="shadow-2xl flex abs flex-col items-center justify-center gap-3 p-10 mt-10 pt-52 text-center">
        <div className="flex justify-center">
          <div className="flex gap-3">
            <Facebook />
            <Instagram />
            <Twitter />
            <Youtube />
            <Pinterest />
          </div>
        </div>

        <h1 className="text-2xl font-semibold">Cristine Smith</h1>

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque dolore magnam aliquam quaerat voluptatem.
        </p>

        <Image src={signature} alt="" />

        <Link
          href={"/"}
          className="text-orange-400 relative after:absolute after:w-full no-underline hover:after:w-0 after:bottom-0 after:right-0 after:h-[1px] after:bg-orange-400 after:transition-all after:duration-[0.2s] delay-[0.2s]   "
        >
          Read More
        </Link>
      </div>

      <div className="relative bg-transparent border-b">
        <input
          type="text"
          className="w-full bg-transparent px-3 py-3 focus:outline-none "
          placeholder="Search"
        />
        <Search className="absolute right-3 top-4 " />
      </div>

      <div className="p-8 flex flex-col gap-3 bg-black">
        <h1 className="text-lg font-bold text-white">
          Subscribe to our newsletter
        </h1>
        <input
          type="email"
          className="w-full p-3 focus:outline-none "
          placeholder="Your Email Here "
        />
        <button className="block mr-auto border-[1px] border-orange-400 text-orange-400 hover:text-gray-50  hover:bg-orange-400 transition ease-in-out delay-75 px-10 py-3 ">
          Subscribe
        </button>
      </div>

      <h1 className="text-2xl font-semibold">Categories</h1>

      <div className="flex flex-col gap-5 min-w-[18.2rem]">
        <div className="relative" >
          <div className=" min-w-[18.2rem]" >
            <Image src={cat1} className="w-full" alt="" />
          </div>
          <span className="uppercase absolute bottom-0 right-0 left-0 bg-orange-400 text-white p-1 sm:p-2 ">
            Travel
          </span>
        </div>
        <div className="relative" >
          <div className=" min-w-[18.2rem]" >
            <Image src={cat2} className="w-full" alt="" />
          </div>
          <span className="uppercase absolute bottom-0 right-0 left-0 bg-orange-400 text-white p-1 sm:p-2 ">
            Travel
          </span>
        </div>
        <div className="relative" >
          <div className=" min-w-[18.2rem]" >
            <Image src={cat3} className="w-full" alt="" />
          </div>
          <span className="uppercase absolute bottom-0 right-0 left-0 bg-orange-400 text-white p-1 sm:p-2 ">
            Travel
          </span>
        </div>
        <div className="relative" >
          <div className=" min-w-[18.2rem]" >
            <Image src={cat4} className="w-full" alt="" />
          </div>
          <span className="uppercase absolute bottom-0 right-0 left-0 bg-orange-400 text-white p-1 sm:p-2 ">
            Travel
          </span>
        </div>


      </div>

      <h1 className="text-2xl font-semibold">Latest Posts</h1>

      <div className="flex flex-col sm:flex-row flex-wrap gap-4">
        <div className="flex gap-4 ">
          <div>
            <Image src={rpost1} className="w-[80px]" alt="" />
          </div>

          <div className="flex flex-col">
            <div className="block mr-auto bg-orange-400 uppercase text-gray-50 text-base border-[1px] border-orange-400 transition ease-in-out delay-75  px-4 tracking-wider hover:text-orange-400 hover:bg-gray-50 hover:border hover:border-orange-400 ">
              <span className="uppercase ">Travel</span>
            </div>

            <Link href={"/"} className="text-lg no-underline text-gray-950 hover:text-orange-400 font-semibold">
              One more night in the clubs
            </Link>

            <p className="text-gray-500">Monday, October 13, 2017</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <Image src={rpost2} className="w-[80px]" alt="" />
          </div>

          <div className="flex flex-col">
            <div className="block mr-auto bg-orange-400 uppercase text-gray-50 text-base border-[1px] border-orange-400 transition ease-in-out delay-75  px-4 tracking-wider hover:text-orange-400 hover:bg-gray-50 hover:border hover:border-orange-400 ">
              <span className="uppercase ">Travel</span>
            </div>

            <Link href={"/"} className="text-lg no-underline text-gray-950 hover:text-orange-400 font-semibold">
              One more night in the clubs
            </Link>

            <p className="text-gray-500">Monday, October 13, 2017</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <Image src={rpost3} className="w-[80px]" alt="" />
          </div>

          <div className="flex flex-col">
            <div className="block mr-auto bg-orange-400 uppercase text-gray-50 text-base border-[1px] border-orange-400 transition ease-in-out delay-75  px-4 tracking-wider hover:text-orange-400 hover:bg-gray-50 hover:border hover:border-orange-400 ">
              <span className="uppercase ">Travel</span>
            </div>

            <Link href={"/"} className="text-lg no-underline text-gray-950 hover:text-orange-400 font-semibold">
              One more night in the clubs
            </Link>

            <p className="text-gray-500">Monday, October 13, 2017</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <Image src={rpost4} className="w-[80px]" alt="" />
          </div>

          <div className="flex flex-col">
            <div className="block mr-auto bg-orange-400 uppercase text-gray-50 text-base border-[1px] border-orange-400 transition ease-in-out delay-75  px-4 tracking-wider hover:text-orange-400 hover:bg-gray-50 hover:border hover:border-orange-400 ">
              <span className="uppercase ">Travel</span>
            </div>

            <Link href={"/"} className="text-lg no-underline text-gray-950 hover:text-orange-400 font-semibold">
              One more night in the clubs
            </Link>

            <p className="text-gray-500">Monday, October 13, 2017</p>
          </div>
        </div>
      </div>

      <h1 className="text-2xl font-semibold">Advertisement</h1>

      <div className="w-max">
        <div className=" relative w-[17.5rem] " >
          <Image src={ad1} alt="" />
          <button className="uppercase border-[1px] border-gray-50 absolute bottom-10 right-0 left-0 hover:bg-orange-500 hover:border-orange-500 transition ease-in-out delay-75 py-3 w-2/4 text-white m-auto ">
            Discover
          </button>
        </div>
      </div>

      <h1 className="text-2xl font-semibold">Instagram</h1>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-2 lg:gap-3">
          <div className="flex-1 relative flex items-center justify-center">
            <Image src={instaside1} width={200} alt="" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image src={instaside4} width={200} alt="" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image src={instaside3} width={200} alt="" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 lg:gap-3">
          <div className="flex-1 relative flex items-center justify-center">
            <Image src={instaside4} width={200} alt="" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image src={instaside5} width={200} alt="" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image src={instaside6} width={200} alt="" />
          </div>
        </div>

      </div>

      <h1 className="text-2xl font-semibold">Tags</h1>

      <div className="flex gap-3 flex-wrap">
        <span className="border-[1px] bg-orange-500 text-gray-50 hover:border-[1px] hover:border-orange-400 hover:bg-gray-50 hover:text-orange-400 px-3 py-2 tracking-wider">
          design
        </span>
        <span className="border-[1px] bg-orange-500 text-gray-50 hover:border-[1px] hover:border-orange-400 hover:bg-gray-50 hover:text-orange-400 px-3 py-2 tracking-wider">
          fashion
        </span>
        <span className="border-[1px] bg-orange-500 text-gray-50 hover:border-[1px] hover:border-orange-400 hover:bg-gray-50 hover:text-orange-400 px-3 py-2 tracking-wider">
          travel
        </span>
        <span className="border-[1px] bg-orange-500 text-gray-50 hover:border-[1px] hover:border-orange-400 hover:bg-gray-50 hover:text-orange-400 px-3 py-2 tracking-wider">
          music
        </span>
        <span className="border-[1px] bg-orange-500 text-gray-50 hover:border-[1px] hover:border-orange-400 hover:bg-gray-50 hover:text-orange-400 px-3 py-2 tracking-wider">
          video
        </span>
        <span className="border-[1px] bg-orange-500 text-gray-50 hover:border-[1px] hover:border-orange-400 hover:bg-gray-50 hover:text-orange-400 px-3 py-2 tracking-wider">
          photography
        </span>
        <span className="border-[1px] bg-orange-500 text-gray-50 hover:border-[1px] hover:border-orange-400 hover:bg-gray-50 hover:text-orange-400 px-3 py-2 tracking-wider">
          adventure
        </span>
      </div>

    </section>
  );
};

export default Sidebar;
