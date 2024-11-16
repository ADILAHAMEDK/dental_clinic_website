import React from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className="px-[50px] py-[25px] fixed top-0 z-10 w-full bg-white border ">
      <div className="max-w-[1440px] mx-auto bg-white">
        <div className="flex items-center justify-between ">
          <img
            src={logo}
            alt="logo"
            className="w-[187.88px] h-[55.56px] object-cover"
          />
          <div className="flex items-center">
            <ul className="flex space-x-14 list-disc text-black text-[17px] leading-[19.4px] mr-10">
              <li className="list-none">
                <a href="#home" className="text-[rgba(245,130,32,1)] font-bold">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  className="hover:text-gray-600 font-[400px]"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-gray-600 font-[400px]"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gray-600 font-[400px]">
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#promotions"
                  className="hover:text-gray-600 font-[400px]"
                >
                  Promotions
                </a>
              </li>
              <li>
                <a href="#blogs" className="hover:text-gray-600 font-[400px]">
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#contact-us"
                  className="hover:text-gray-600 font-[400px]"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <button className="bg-[rgba(245,130,32,1)] text-white font-[500px] text-[16px] leading-[19.2px]  rounded-[6px] w-[140px] h-[43px] px-[12px] py-[12px]">
              Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
