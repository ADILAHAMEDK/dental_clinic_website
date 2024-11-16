import React from "react";
import logo2 from "../assets/images/logo2.png";
import social from "../assets/images/social.png";
import map from "../assets/images/map.png";

const Footer = () => {
  return (
    <div className="w-full h-[694px] bg-blue2 text-white">
      <div className="border-b-2 border-b-border pb-4">
        <div className="max-w-[1440px] mx-auto py-10">
          <img
            src={logo2}
            alt="img"
            className="w-[187px] h-[55px] text-white"
          />
          <div className="flex justify-between mt-14">
            <div>
              <h1 className="text-3xl font-semibold mb-7">Get In Touch</h1>
              <span className="block mb-4 text-lg font-normal">
                Contact Number
              </span>
              <span>
                +971 4 2979464<span className="block">+971 56 4848613</span>
              </span>
              <span className="block mb-6">Email</span>
              <span className="block mb-10">info@smiledentaldubai.com</span>
              <img src={social} alt="img" className="w-[179px] h-[29px]" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold mb-7">Our Address</h1>
              <p className="w-[300px] mb-5">
                Room No: 314 Al Attar Shopping MallNext to Karama Center,Al
                karama,P.O.Box: 125706, Dubai, UAE
              </p>
              <span className="text-3xl font-medium">Location Map</span>
              <img src={map} alt="img" className="w-[334px] h-[116px] mt-5" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold mb-7">Quick Links</h1>
              <span className="block mb-2">Home</span>
              <span className="block mb-2">About Us</span>
              <span className="block mb-2">Services</span>
              <span className="block mb-2">Gallery</span>
              <span className="block mb-2">Blogs</span>
              <span className="block">Contact Us</span>
            </div>
            <div>
              <div>
                <h1 className="text-3xl font-semibold mb-7">Quick Links</h1>
                <span className="block mb-3">Children's Dentistry</span>
                <span className="block mb-11">General Dentistry</span>
              </div>
              <div className="mb-11">
                <h1 className="text-3xl font-semibold mb-7">Quick Links</h1>
                <span className="block">Open all 7 days</span>
                <span className="block">9:00 AM to 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center mt-7 text-border">
        @copyright all reserved by Smile Essentials - Powered by Hoztox
        Technologies
      </h1>
    </div>
  );
};

export default Footer;
