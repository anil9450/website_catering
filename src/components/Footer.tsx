import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black p-2 text-white text-center mt-4 rounded font-bold text-2xl">
      <div className="flex justify-between mt-4">
        <span className="">Designed by rk web services</span>
        <span className="">Shreetrilokinath@gmail.com </span>
        <span className="flex mt-1">
          <Link href="">
            <FaFacebook className="text-blue-600" />
          </Link>
          <Link href="">
            <FaInstagram className="text-red-600 ml-4" />
          </Link>
          <Link href="">
            <FaTwitter className="text-blue-600 ml-4" />
          </Link>
          <Link href="">
            <FaLinkedin className="text-blue-600 ml-4" />
          </Link>
        </span>
      </div>
      <div className="font-bold text-gray-300 mt-6">
        SUPERTECH ECO VILLAGE-2, UGF 02-A SUPERTECH MARKET 1ST, Noida Extension,
        Greater Noida, Uttar Pradesh 201306
      </div>
    </div>
  );
};

export default Footer;
