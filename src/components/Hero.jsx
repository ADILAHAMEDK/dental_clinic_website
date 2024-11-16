import React from "react";
import heroImage from "../assets/images/women.png";
import google from "../assets/images/google.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import men from "../assets/images/man.png";
import women from "../assets/images/women2.png";
import men2 from "../assets/images/men2.png";
import arrow from "../assets/images/Arrow.png";
import arrow2 from "../assets/images/Arrow2.png";
import call from "../assets/images/call.png";
import whatsApp from "../assets/images/whatsApp.png";
import medal from "../assets/images/medal.png";
import teeth from "../assets/images/teeth.png";
import doctor from "../assets/images/doctor.png";
import frame from "../assets/images/Frame.png";

const Hero = () => {
  return (
    <div className="overflow-x-hidden border">
      <div className="relative max-w-[1440px] ml-auto bg-white mt-[95px]">
        <img
          src={heroImage}
          alt="img"
          className=" w-[1102px] h-[734px] ml-auto object-cover"
        />
        <div className="absolute top-[100px] -left-5 flex justify-between gap-[550px] ">
          <div className="relative">
            <h1 className="w-[622px] font-bold text-7xl leading-[75px]  text-black mb-[80px]">
              Have a shining <span className="block">smile with our</span>{" "}
              <span className="block text-7xl text-[rgba(245,130,32,1)]">
                modern methods!
              </span>
            </h1>
            <div className=" bg-white fixed z-20 w-[220px] py-[6px] pl-1 pr-5 flex items-center shadow-md border-t-[3.5px] border-t-green-600 rounded-t-lg">
              <img
                src={google}
                alt="logo"
                className="w-[51.27px] h-[51.27px] object-cover mx-auto"
              />
              <div className="">
                <span className="font-semibold text-[14.12px] leading-[13.12px] text-center text-Gray">
                  Google Rating
                </span>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-[20.69px] leading-[19.69px] text-center text-yellow pt-1">
                    4.8
                  </span>
                  <div className="flex items-center mt-1 h-[16.71px] text-yellowStar">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                </div>
                <span className="font-[400px] text-[10.84px] leading-[12.4px] text-center text-Gray2">
                  See all our reviews
                </span>
              </div>
            </div>
            <div className="flex items-end mt-[214px] z-0">
              <img src={arrow} alt="img" className="w-[50px] h-[50px]" />
              <img src={arrow2} alt="img" className="w-[50px] h-[50px]" />
            </div>
          </div>

          <div className="border-2 border-gradient-radial rounded-md w-[250px] h-[200px] pt-3 pb-2 px-4 bg-gradient-linear">
            <h1 className="text-orange font-bold text-[24px] leading-[28.8px]">
              15+ <span className="font-normal text-lg">Expert Doctors</span>
            </h1>
            <div className="flex items-center gap-4 mt-3 mb-6">
              <img
                src={men}
                alt="img"
                className="w-[60px] h-[60px] rounded-full"
              />
              <img
                src={women}
                alt="img"
                className="w-[60px] h-[60px] rounded-full"
              />
              <img
                src={men2}
                alt="img"
                className="w-[60px] h-[60px] rounded-full"
              />
            </div>
            <div className="w-[300px] font-[400] text-[13px] text-black leading-[15.6px]">
              <span className="block">We take meticulous care of</span>
              <span className="block">Your dental needs</span>
              <span className="block">to ensure a healthy, lasting smile.</span>
            </div>
            <div className="fixed bottom-0 right-12 z-10 ">
              <img
                src={call}
                alt="img"
                className="w-[55px] h-[55px] relative top-0"
              />
              <img src={whatsApp} alt="img" className="w-[55px] h-[55px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue2 h-[169px] w-full relative">
        <div className="w-[1405px] h-[166px] bg-white  border mx-auto absolute -top-[80px] left-[57px] py-9 rounded-lg ">
          <div className="flex items-center justify-between gap-16 px-9">
            <div className="flex items-center gap-3 border-r-2 border-borderR">
              <img src={teeth} alt="img" className="w-[86px] h-[86px]" />
              <div className="pr-16">
                <h1 className="font-semibold text-[40px] text-orange leading-[48px]">
                  20+ Yrs
                </h1>
                <span className="text-gray3 text-[16px] font-medium leading-[25px]">
                  Dental Care
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 border-r-2 border-borderR">
              <img src={medal} alt="img" className="w-[86px] h-[86px]" />
              <div className="pr-16">
                <h1 className="font-semibold text-[40px] text-orange leading-[48px]">
                  2200+
                </h1>
                <span className="text-gray3 text-[16px] font-medium leading-[25px]">
                  Google Reviews
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 border-r-2 border-borderR">
              <img src={frame} alt="img" className="w-[86px] h-[86px]" />
              <div className="pr-16">
                <h1 className="font-semibold text-[40px] text-orange leading-[48px]">
                  50k+
                </h1>
                <span className="text-gray3 text-[16px] font-medium leading-[25px]">
                  Happy Patients
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={doctor} alt="img" className="w-[86px] h-[86px]" />
              <div>
                <h1 className="font-semibold text-[40px] text-orange leading-[48px]">
                  15k+
                </h1>
                <span className="text-gray3 text-[16px] font-medium leading-[25px]">
                  Dentists
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
