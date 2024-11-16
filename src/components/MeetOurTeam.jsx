import React from "react";
import dr1 from "../assets/images/dr1.png";
import dr2 from "../assets/images/dr2.png";
import dr3 from "../assets/images/dr3.png";
import dr4 from "../assets/images/dr4.png";

const MeetOurTeam = () => {
  return (
    <div className="bg-blue2 w-full h-[435px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="pt-24">
          <h1 className="text-5xl text-white font-semibold text-center pb-9">
            Meet Our Team
          </h1>
          <p className="text-gray4 text-lg text-center">
            Lorem ipsum available, but the majority have suffered alteration in
            some form,
            <span className="block">
              by injected humour, or randomised words which don't look even
            </span>
          </p>
        </div>

        <div className="flex items-center justify-center gap-10 mt-16 ">
          <div>
            <img src={dr1} alt="img" className="w-[320px] h-[353px] pb-6" />
            <h1 className="font-bold text-2xl">Dr. Jhone Paul</h1>
            <span className="text-gray4 font-medium text-lg">
              General Dentist
            </span>
          </div>
          <div>
            <img src={dr2} alt="img" className="w-[320px] h-[353px] pb-6" />
            <h1 className="font-bold text-2xl">Dr. Khaled Abul</h1>
            <span className="text-gray4 font-medium text-lg">
              Children's Dentist
            </span>
          </div>
          <div>
            <img src={dr3} alt="img" className="w-[320px] h-[353px] pb-6" />
            <h1 className="font-bold text-2xl">Dr. Marwan Serhal</h1>
            <span className="text-gray4 font-medium text-lg">
              Children's Dentist
            </span>
          </div>
          <div>
            <img src={dr4} alt="img" className="w-[320px] h-[353px] pb-6" />
            <h1 className="font-bold text-2xl">Dr. Chinchu Mathew</h1>
            <span className="text-gray4 font-medium text-lg">
              Children's Dentist
            </span>
          </div>
        </div>
        <button className="bg-orange text-white text-xl px-6 py-[10px] rounded-md mt-[50px] ml-[600px] ">
          View All Team
        </button>
      </div>
    </div>
  );
};

export default MeetOurTeam;
