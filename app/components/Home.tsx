import Image from "next/image";
import React from "react";
import blog1 from "../../public/blog-1-1000x600.jpg.webp";
import blog7 from "../../public/blog-7-500x400.jpg.webp";
import { ChatLeftDots, Heart, Share } from "react-bootstrap-icons";
import Link from "next/link";

const Home = () => {
  return (
    <div className=" w-full lg:w-[60%] flex flex-col gap-y-10 my-10 ">

      <div className="flex flex-col gap-3">
        {/* img  */}
        <div>
          <Image src={blog1} alt="blog1" />
        </div>

        {/* category */}
        <div className="flex justify-between">
          <div
            className="border-[1px] uppercase border-orange-400 text-gray-50 hover:text-orange-400 bg-orange-400 hover:bg-gray-50 hover:border-orange-400 transition ease-in-out delay-75  block mr-auto px-4 py-1 font-semibold "
          >
            Travel
          </div>
          <div className="flex gap-3 text-gray-500 ">
            <div className="flex items-center gap-2">
              <Share />
              Share
            </div>
            <div className="flex items-center gap-2">
              <Heart />
              03
            </div>
            <div className="flex items-center gap-2">
              <ChatLeftDots /> 06
            </div>
          </div>
        </div>

        {/* date  */}
        <div>
          <p className="text-gray-500" >Monday, October 13, 2017</p>
        </div>

        <Link href={"/"} className="text-2xl no-underline text-slate-950 hover:text-orange-400 font-semibold">
          This is post about travel, adventure and fun
        </Link>

        <p className="text-justify">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas consectetur,
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem.
        </p>

        <Link
          href={"/"}
          className="border-[1px] uppercase no-underline border-orange-400 text-orange-400 hover:text-white hover:bg-orange-400 transition ease-in-out delay-75  block mr-auto px-7 py-3 font-semibold shadow-lg "
        >
          Read More
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        {/* img  */}
        <div>
          <Image src={blog1} alt="blog1" />
        </div>

        {/* category */}
        <div className="flex justify-between">
          <div
            className="border-[1px] uppercase border-orange-400 text-gray-50 hover:text-orange-400 bg-orange-400 hover:bg-gray-50 hover:border-orange-400 transition ease-in-out delay-75  block mr-auto px-4 py-1 font-semibold "
          >
            Travel
          </div>
          <div className="flex gap-3 text-gray-500 ">
            <div className="flex items-center gap-2">
              <Share />
              Share
            </div>
            <div className="flex items-center gap-2">
              <Heart />
              03
            </div>
            <div className="flex items-center gap-2">
              <ChatLeftDots /> 06
            </div>
          </div>
        </div>

        {/* date  */}
        <div>
          <p className="text-gray-500" >Monday, October 13, 2017</p>
        </div>

        <Link href={"/"} className="text-2xl no-underline text-slate-950 hover:text-orange-400 font-semibold">
          This is post about travel, adventure and fun
        </Link>

        <p className="text-justify">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas consectetur,
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem.
        </p>

        <Link
          href={"/"}
          className="border-[1px] uppercase no-underline border-orange-400 text-orange-400 hover:text-white hover:bg-orange-400 transition ease-in-out delay-75  block mr-auto px-7 py-3 font-semibold shadow-lg "
        >
          Read More
        </Link>
      </div>

      <div className="flex flex-col md:flex-row">

        <div className="flex flex-1 flex-col gap-3">
          {/* img  */}
          <div>
            <Image src={blog1} alt="blog1" />
          </div>

          {/* category */}
          <div className="flex justify-between">
            <div
              className="border-[1px] uppercase border-orange-400 text-gray-50 hover:text-orange-400 bg-orange-400 hover:bg-gray-50 hover:border-orange-400 transition ease-in-out delay-75  block mr-auto px-4 py-1 font-semibold "
            >
              Travel
            </div>
            <div className="flex gap-3 text-gray-500 ">
              <div className="flex items-center gap-2">
                <Share />
                Share
              </div>
              <div className="flex items-center gap-2">
                <Heart />
                03
              </div>
              <div className="flex items-center gap-2">
                <ChatLeftDots /> 06
              </div>
            </div>
          </div>

          {/* date  */}
          <div>
            <p className="text-gray-500" >Monday, October 13, 2017</p>
          </div>

          <Link href={"/"} className="text-2xl no-underline text-slate-950 hover:text-orange-400 font-semibold">
            This is post about travel, adventure and fun
          </Link>

          <p className="text-justify">
            Sed ut perspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo veritatis et quasi dolore magnam aliquam quaerat voluptatem.
          </p>

          <Link
            href={"/"}
            className="border-[1px] uppercase no-underline border-orange-400 text-orange-400 hover:text-white hover:bg-orange-400 transition ease-in-out delay-75  block mr-auto px-7 py-3 font-semibold shadow-lg "
          >
            Read More
          </Link>
        </div>
        
      </div>

      <div className="flex md:flex-row flex-col gap-3">

        <div className="flex flex-1 flex-col gap-3">
          {/* img  */}
          <div>
            <Image src={blog1} alt="blog1" />
          </div>

          {/* category */}
          <div className="flex justify-between">
            <div
              className="border-[1px] uppercase border-orange-400 text-gray-50 hover:text-orange-400 bg-orange-400 hover:bg-gray-50 hover:border-orange-400 transition ease-in-out delay-75  block mr-auto px-4 py-1 font-semibold "
            >
              Travel
            </div>
            <div className="flex gap-3 text-gray-500 ">
              <div className="flex items-center gap-2">
                <Share />
                Share
              </div>
              <div className="flex items-center gap-2">
                <Heart />
                03
              </div>
              <div className="flex items-center gap-2">
                <ChatLeftDots /> 06
              </div>
            </div>
          </div>

          {/* date  */}
          <div>
            <p className="text-gray-500" >Monday, October 13, 2017</p>
          </div>

          <Link href={"/"} className="text-2xl no-underline text-slate-950 hover:text-orange-400 font-semibold">
            This is post about travel, adventure and fun
          </Link>

          <p className="text-justify">
            Sed ut perspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo veritatis et quasi dolore magnam aliquam quaerat voluptatem.
          </p>

          <Link
            href={"/"}
            className="border-[1px] uppercase no-underline border-orange-400 text-orange-400 hover:text-white hover:bg-orange-400 transition ease-in-out delay-75  block mr-auto px-7 py-3 font-semibold shadow-lg "
          >
            Read More
          </Link>
        </div>

        <div className="flex flex-1 flex-col gap-3">
          {/* img  */}
          <div>
            <Image src={blog1} alt="blog1" />
          </div>

          {/* category */}
          <div className="flex justify-between">
            <div
              className="border-[1px] uppercase border-orange-400 text-gray-50 hover:text-orange-400 bg-orange-400 hover:bg-gray-50 hover:border-orange-400 transition ease-in-out delay-75  block mr-auto px-4 py-1 font-semibold "
            >
              Travel
            </div>
            <div className="flex gap-3 text-gray-500 ">
              <div className="flex items-center gap-2">
                <Share />
                Share
              </div>
              <div className="flex items-center gap-2">
                <Heart />
                03
              </div>
              <div className="flex items-center gap-2">
                <ChatLeftDots /> 06
              </div>
            </div>
          </div>

          {/* date  */}
          <div>
            <p className="text-gray-500" >Monday, October 13, 2017</p>
          </div>

          <Link href={"/"} className="text-2xl no-underline text-slate-950 hover:text-orange-400 font-semibold">
            This is post about travel, adventure and fun
          </Link>

          <p className="text-justify">
            Sed ut perspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo veritatis et quasi dolore magnam aliquam quaerat voluptatem.
          </p>

          <Link
            href={"/"}
            className="border-[1px] uppercase no-underline border-orange-400 text-orange-400 hover:text-white hover:bg-orange-400 transition ease-in-out delay-75  block mr-auto px-7 py-3 font-semibold shadow-lg "
          >
            Read More
          </Link>
        </div>
        
      </div>

      <div className="flex md:flex-row flex-col gap-3">
        {/* img  */}
        <div className="flex-1">
          <Image src={blog7} alt="blog1" />
        </div>

        <div className="flex flex-1 flex-col gap-3">
          {/* category */}
          <div className="flex justify-between">
            <div className="border-[1px] bg-orange-400 uppercase text-gray-50 text-lg border-orange-400 transition ease-in-out delay-75 font-semibold px-6 tracking-wider hover:text-orange-400 hover:bg-white hover:border hover:border-orange-400 ">
              Travel
            </div>
            <div className="flex gap-3 text-gray-500 ">
              <div className="flex items-center gap-2">
                <Share />
                Share
              </div>
              <div className="flex items-center gap-2">
                <Heart />
                03
              </div>
              <div className="flex items-center gap-2">
                <ChatLeftDots /> 06
              </div>
            </div>
          </div>

          {/* date  */}
          <div>
            <p className="text-gray-500" >Monday, October 13, 2017</p>
          </div>

          <Link href={"/"} className="text-2xl font-semibold no-underline text-gray-950 hover:text-orange-400 ">
            This is post about travel, adventure and fun
          </Link>

          <p className="text-justify">
            Sed ut perspiciatis unde omnis iste natus error sit doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo veritatis et
            quasi dolore magnam aliquam quaerat voluptatem.
          </p>

          <Link
            href={"/"}
            className="border-[1px] border-orange-400 no-underline text-orange-400 hover:text-gray-50 hover:bg-orange-400 transition ease-in-out delay-75  block mr-auto px-7 py-3 font-semibold uppercase shadow-lg "
          >
            Read More
          </Link>
        </div>
      </div>

      <div className=" block mr-auto bg-orange-400 capitalize text-gray-50 text-lg border-[1px] border-orange-400 transition ease-in-out delay-75 font-semibold px-6 py-3 tracking-wider hover:text-orange-400 hover:bg-white hover:border-[1px] hover:border-orange-400 ">
        <span className="capitalize">Load Older Posts</span>
      </div>

    </div>
  );
};

export default Home;
