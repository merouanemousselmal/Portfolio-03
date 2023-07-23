import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#020944]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 text-gray-300 border-sky-400">
            Work
          </h2>
          <p className="py-6">/ Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 bg-sky-400 w-full duration-300 rounded-md">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
