import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black p-4 text-white text-center mt-4 rounded font-bold text-xl">
      <div className="bg-secondary text-white">
        <div className="container mx-auto pt-16 pb-6">
          <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6 ">
            <div className="md:flex-1">
              <div className="text-[30px] font-dancing font-bold">
                Contact Us
              </div>
              <div className="flex flex-col gap-y-2 mt-3">
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="Хөвсгөл аймаг, Жаргалант сум"
                >
                  <i className="fa fa-map-marker"></i>
                  <span className="inline-block ml-2">
                    SUPERTECH ECO VILLAGE-2, UGF 02-A SUPERTECH MARKET 1ST,
                    Noida Extension, Greater Noida, Uttar Pradesh 201306
                  </span>
                </Link>
                <div>
                  <i className="fa fa-phone"></i>
                  <Link className="inline-block ml-2" href="tel:97680907867">
                    +91 9650763066
                  </Link>
                </div>
                <Link href="mailto:munkhdelgerRestaurant@gmail.com">
                  <i className="fa fa-envelope"></i>
                  <span className="inline-block ml-2">
                    Shreetrilokinath@gmail.com
                  </span>
                </Link>
              </div>
            </div>
            <div className="md:flex-1">
              <div className="text-[38px] font-dancing font-bold">
                BANARAS CATERERS
              </div>
              <p className="mt-3">
                Serving happiness, one delicious plate at a time
              </p>
              <div className="flex items-center justify-center mt-5 gap-x-2">
                <Link
                  href="https://www.facebook.com"
                  className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-white hover:bg-primary transition-all transform hover:scale-110 "
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="text-blue-600 hover:text-blue-800" />
                </Link>
                <Link
                  href="https://www.instagram.com/accounts/login/"
                  className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-white hover:bg-primary transition-all transform hover:scale-110 "
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="text-red-600 hover:text-red-800" />
                </Link>
                <Link
                  href="https://"
                  className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-white hover:bg-primary transition-all transform hover:scale-110 "
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter className="text-blue-600 hover:text-blue-800" />
                </Link>
                <Link
                  href="https://"
                  className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:text-white hover:bg-primary transition-all transform hover:scale-110 "
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="text-blue-600 hover:text-blue-800" />
                </Link>
              </div>
            </div>
            <div className="md:flex-1">
              <div className="text-[30px] font-dancing font-bold">
                Opening Hours
              </div>
              <div className="flex flex-col gap-y-2 mt-3">
                <div>
                  <span className="inline-block ml-2">Timing</span>
                </div>
                <div>
                  <span className="inline-block ml-2">09:00 AM - 18:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center mt-10">© 2024 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
