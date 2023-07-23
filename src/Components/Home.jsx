import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#050a30]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-sky-400 text-5xl font-semibold">Hi,</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          I'am Merouane
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Front-End Web Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I m a Front-End web developer learning react by building websites like this one and i will start learning node js next week inchallah 22/07/2023  
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-sky-400 hover:border-sky-400 duration-300">
            View Work
            <HiArrowNarrowRight className="ml-3 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
