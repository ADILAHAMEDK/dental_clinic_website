import React from "react";
import happy from "../assets/images/happy.png";
import fan from "../assets/images/fan.png";
import girl from "../assets/images/girl.png";
import girl2 from "../assets/images/girl2.png";
import dot from "../assets/images/dot.png";

const HappyClients = () => {
  return (
    <div className="bg-orange2 h-[690px]">
      <div className="max-w-[1440px] mx-auto relative">
        <div className="flex gap-14 pt-10 ">
          <img src={happy} alt="img" className="w-[526px] h-[442px]" />
          <h1 className="mt-10 text-5xl font-bold text-white">
            500+ Happy clients said
            <span className="block pt-2">to us they are satisfied</span>
          </h1>
        </div>

        <div className="flex gap-5 absolute top-[270px] left-[380px]">
          <div className="w-[453px] h-[296px] bg-card pt-5 px-5 rounded-xl">
            <img src={fan} alt="img" className="w-[52px] h-[34px]" />
            <p className="w-[450px] pt-4 pb-14 text-gray5">
              We value your feedback and are committed to providing exceptional
              service to all our clients. If you have any concerns or questions
            </p>
            <div className="flex gap-6">
              <img src={girl} alt="img" className="w-[48px] h-[48px]" />
              <div>
                <h1 className="text-lg font-bold">Jang Wonyoung</h1>
                <span className="text-gray4">Korea</span>
              </div>
            </div>
          </div>

          <div className="w-[453px] h-[296px] bg-card pt-[59px] px-5 rounded-xl">
            <p className="w-[450px] pt-3 pb-20 text-gray5">
              Our priority, and we appreciate the opportunity to address any
              issues and ensure your complete satisfaction.
            </p>
            <div className="flex gap-6">
              <img src={girl2} alt="img" className="w-[48px] h-[48px]" />
              <div>
                <h1 className="text-lg font-bold">Jang Wonyoung</h1>
                <span className="text-gray4">Korea</span>
              </div>
            </div>
          </div>
        </div>
        <img
          src={dot}
          alt="img"
          className="w-[98px] h-[17px] mt-[120px] ml-[660px]"
        />
      </div>
    </div>
  );
};

export default HappyClients;
