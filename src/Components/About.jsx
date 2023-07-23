import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#020944] text-gray-300 flex flex-col justify-center items-center">
      <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
        <div className="sm:text-right pb-8 pl-4">
          <h2 className="text-4xl font-bold inline border-b-4 border-sky-400">
            About
          </h2>
        </div>
        <div></div>
      </div>
      <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
        <div className="sm:text-right text-4xl font-bold">
          <p>
            Hi. I'm Mousselaml Merouane , nice to meet you. Please take a look
            around.
          </p>
        </div>
        <div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            sint, ratione non quos ut aperiam necessitatibus accusamus tempore
            obcaecati consectetur aliquid in at totam minus odio? Repellat
            praesentium et fuga!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
