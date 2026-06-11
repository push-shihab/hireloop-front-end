import React from "react";
import Intro from "../intro/Intro";
import Purpose from "../purpose/Purpose";
import Image from "next/image";
import globe from "../../../public/images/globe.png";

const Header = () => {
  return (
    <div className="relative">
      <Intro></Intro>
      <Purpose></Purpose>
      {/* The Globe Asset Layer */}
      <div className="absolute top-0 w-full h-full flex items-center opacity-45 mix-blend-multiply justify-center">
        <Image
          src={globe}
          alt="Globe Backdrop Graphic"
          className="w-auto h-auto object-cover  filter grayscale invert"
          fill
        />
      </div>
    </div>
  );
};

export default Header;
