import React from "react";
import teeth3 from "../assets/images/teeth3.png";
import teeth9 from "../assets/images/teeth9.png";
import teeth4 from "../assets/images/teeth4.png";
import teeth8 from "../assets/images/teeth8.png";
import teeth5 from "../assets/images/teeth5.png";
import teeth10 from "../assets/images/teeth10.png";
import teeth6 from "../assets/images/teeth6.png";
import teeth7 from "../assets/images/teeth7.png";
import teeth2 from "../assets/images/teeth2.png";

const TreatMent = () => {
  return (
    <div className="bg-white px-28">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="font-bold text-blue2 text-5xl leading-[26px] pt-[120px] pb-10">
          Transform your smile with{" "}
          <span className="block pt-9">Veneers, Whitening, and implants.</span>
        </h1>
        <span className="text-gray4 text-[18px] font-[400px] leading-[26px]">
          Lorem Ipsum available, but the majority have suffered alteration in
          some form,
          <span className="block">
            by injected humour, or randomised words which don't look even
          </span>
        </span>
        <div className="grid grid-cols-5 justify-items-center gap-10 gap-y-16  mt-20 mb-28 px-4">
          <div>
            <img
              src={teeth3}
              alt="img"
              className="w-[120px] h-[70px] object-contain"
            />
            <h1 className="text-blue2 font-semibold text-2xl text-center">
              Orthodontics
            </h1>
          </div>
          <div>
            <img
              src={teeth9}
              alt="img"
              className="w-[120px] h-[70px] object-contain"
            />
            <h1 className="text-blue2 font-semibold text-2xl text-center">
              General<span className="block">Dentistry</span>
            </h1>
          </div>
          <div>
            <img
              src={teeth4}
              alt="img"
              className="w-[120px] h-[70px] object-contain"
            />
            <h1 className="text-blue2 font-semibold text-2xl text-center">
              Cosmetics<span className="block">Dentistry</span>
            </h1>
          </div>
          <div>
            <img
              src={teeth8}
              alt="img"
              className="w-[108px] h-[70px] object-contain"
            />
            <h1 className="text-blue2 font-semibold text-2xl text-center">
              Teeth<span className="block">Whitening</span>
            </h1>
          </div>
          <div>
            <img
              src={teeth5}
              alt="img"
              className="w-[108px] h-[70px] object-contain"
            />
            <h1 className="text-blue2 font-semibold text-2xl text-center">
              Gum<span className="block">Treatment</span>
            </h1>
          </div>
          <div>
            <img
              src={teeth10}
              alt="img"
              className="w-[108px] h-[70px] object-contain"
            />
            <h1 className="text-blue2 font-semibold text-2xl text-center">
              Root Canal<span className="block">Treatment</span>
            </h1>
          </div>
          <div>
            <img
              src={teeth6}
              alt="img"
              className="w-[108px] h-[70px] object-contain"
            />
            <h1 className="text-blue2 font-semibold text-2xl text-center">
              Crowns and<span className="block">Bridges</span>
            </h1>
          </div>
          <div>
            <img
              src={teeth7}
              alt="img"
              className="w-[108px] h-[70px] object-contain"
            />
            <h1 className="text-blue2 font-semibold text-2xl text-center">
              Jaw joint<span className="block">Disorder</span>
            </h1>
          </div>
          <div>
            <img
              src={teeth2}
              alt="img"
              className="w-[108px] h-[70px] object-contain "
            />
            <h1 className="text-blue2 font-semibold text-2xl text-center">
              Children's<span className="block">Dentistry</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatMent;
