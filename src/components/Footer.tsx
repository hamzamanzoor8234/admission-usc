import React from "react";
import Container from "./Container";
import banner from "../assets/Rectangle 11.png";
const Footer = () => {
  return (
    <footer className="relative mt-10">
      <img
        src={banner}
        className="absolute pointer-events-none w-full top-[50%] translate-y-[-50%] left-0 z-0"
        alt="banner"
      />
      <Container>
        <div className="flex flex-col lg:flex-row z-10 relative">
          <div className="flex-1">
            <button
              type="button"
              className="px-4 py-2 h-[58px] w-[196px] rounded-full border-2 border-white flex items-center justify-center text-white"
            >
              contac us
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
