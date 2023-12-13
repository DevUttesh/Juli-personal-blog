import Image from "next/image";
import React from "react";
import {
  Facebook,
  Instagram,
  Pinterest,
  Search,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";
import insta1 from "../../public/instragram-1-300x400.jpg.webp";
import insta2 from "../../public/instragram-2-300x400.jpg.webp";
import insta3 from "../../public/instragram-3-300x400.jpg.webp";
import insta4 from "../../public/instragram-4-300x400.jpg.webp";
import insta5 from "../../public/instragram-5-300x400.jpg.webp";
import insta6 from "../../public/instragram-6-300x400.jpg.webp";
import insta7 from "../../public/instragram-7-300x400.jpg.webp";

const Footer = () => {
  return (
    <section className="border-t">

      <div className="container m-auto p-3 font-bold text-xl">
        <h6>Follow me © instagram</h6>
      </div>

      <div className="flex flex-col sm:flex-row " >
        <div className="flex" >
          <div>
            <Image src={insta1} alt="Instagram" />
          </div>
          <div>
            <Image src={insta2} alt="Instagram" />
          </div>
          <div>
            <Image src={insta3} alt="Instagram" />
          </div>
          <div>
            <Image src={insta4} alt="Instagram" />
          </div>
        </div>
        <div className="flex" >
          <div>
            <Image src={insta5} alt="Instagram" />
          </div>
          <div>
            <Image src={insta6} alt="Instagram" />
          </div>
          <div>
            <Image src={insta7} alt="Instagram" />
          </div>
        </div>

      </div>

      <div className="bg-gray-700 text-white flex justify-center items-center py-4 ">
        <div className="container w-4/5 flex sm:flex-row flex-col gap-3 items-center justify-between ">
          <p className="mb-0">
            Juli © 2018. All rights reserved. | This template <br /> is made with by
            Colorlib
          </p>
          <div className="flex justify-center">
            <div className="flex gap-3">
              <Facebook />
              <Instagram />
              <Twitter />
              <Youtube />
              <Pinterest />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
