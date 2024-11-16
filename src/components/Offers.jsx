import React from "react";
import one from "../assets/images/one.png";
import two from "../assets/images/two.png";
import three from "../assets/images/three.png";
import star from "../assets/images/star.png";

const Offers = () => {
  return (
    <div className="bg-white w-full mt-[480px] pl-9">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-start">
          <h1 className="font-bold text-5xl">
            Exclusive
            <span className="block text-5xl mt-2">Monthly Dental Offers</span>
          </h1>
          <span className="mt-3 mr-[420px] text-gray-500 text-lg max-w-md">
            Unlock your smile's potential with our exclusive
            <span className="block">dental offers for this month</span>
          </span>
        </div>
        <div className="flex items-start justify-between mt-10 gap-6">
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-md shadow-md">
            <img
              src={three}
              alt="img"
              className="w-[395px] h-[183px] rounded-md"
            />
            <h1 className="font-medium text-xl mt-4">
              Cleaning Polishing, Teeth Whitening
              <span className="block">and Comprehensive Consultation</span>
            </h1>
            <h1 className="text-4xl font-bold text-orange text-center mt-5 mb-2">
              599 AED
            </h1>
            <ul className="text-gray4 mt-2 space-y-1">
              <li className="text-lg border-t-2 border-b-2 py-4 text-center">
                Flash Tooth Whitening System for 1 hour
              </li>
              <li className="text-lg text-center border-b-2 pt-3 pb-4">
                Deep Cleaning and Polishing
              </li>
              <li className="text-lg border-b-2 pb-4 pt-2 text-center">
                Full Mouth Treatment Plan Included
              </li>
            </ul>
            <button className="mt-14 px-4 py-3 text-xl font-semibold bg-black text-white rounded-md">
              MAKE AN APPOINTMENT
            </button>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-md shadow-md">
            <img
              src={one}
              alt="img"
              className="w-[395px] h-[183px] rounded-md"
            />
            <h1 className="font-medium text-xl mt-7">Orthodontic Braces</h1>
            <h1 className="text-4xl font-bold text-orange text-center mt-9 mb-2">
              2499 AED
            </h1>
            <ul className="text-gray4 mt-2 space-y-1">
              <li className="text-lg border-t-2 border-b-2 py-4">
                American Association of Orthodontist Member
              </li>
              <li className="text-lg text-center border-b-2 pt-3 pb-4">
                Align Your Complete Teeth in 6-12 Months
              </li>
              <li>
                <span className="block text-center text-lg">
                  Complimentary Teeth Cleaning During
                </span>
                <span className="text-lg border-b-2 pb-4 pt-2 block text-center">
                  {" "}
                  Orthodontic Treatment
                </span>
              </li>
            </ul>
            <button className="mt-7 px-4 py-3 text-xl font-semibold bg-black text-white rounded-md">
              MAKE AN APPOINTMENT
            </button>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-md shadow-md">
            <img
              src={two}
              alt="img"
              className="w-[395px] h-[183px] rounded-md"
            />
            <h1 className="font-medium text-xl mt-4">
              Premium Quality Hollywood
              <span className="block text-center">Smile 20 Teeth</span>
            </h1>
            <h1 className="text-4xl font-bold text-orange text-center mt-4 mb-3">
              14000 AED
            </h1>
            <ul className="text-gray4 mt-2 space-y-1">
              <li className="text-lg border-t-2 border-b-2 py-4 text-center">
                German Quality Super Thin Veneers
              </li>
              <li className="text-lg text-center border-b-2 pt-3 pb-4">
                Painless and Delivered in 5 Days in 2 Sessions
              </li>
              <li>
                <span className="block text-center text-lg">
                  German Trained Cosmetic Dentist Who
                </span>
                <span className="text-lg border-b-2 pb-4 pt-2 block text-center">
                  {" "}
                  Delivered More than 2000 Smiles
                </span>
              </li>
            </ul>
            <button className="mt-7 px-4 py-3 text-xl font-semibold bg-black text-white rounded-md">
              MAKE AN APPOINTMENT
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[130px] mb-[100px] flex items-center justify-between gap-24 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-medium">General Dentistry</h1>
          <img src={star} alt="img" className="w-[39px] h-[39px]" />
        </div>
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-medium">Cosmetic Dentistry</h1>
          <img src={star} alt="img" className="w-[39px] h-[39px]" />
        </div>
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-medium">Teeth Whitening </h1>
          <img src={star} alt="img" className="w-[39px] h-[39px]" />
        </div>
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-medium">Gum Treatment</h1>
          <img src={star} alt="img" className="w-[39px] h-[39px]" />
        </div>
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-medium">Root Canal Treatment</h1>
          <img src={star} alt="img" className="w-[39px] h-[39px" />
        </div>
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-medium">Crowns and Bridges</h1>
          <img src={star} alt="img" className="w-[39px] h-[39px]" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
