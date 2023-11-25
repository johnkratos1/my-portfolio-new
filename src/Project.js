import React from "react";
import Image from "next/image";

function Project({ src, appName, desc, link }) {
  return (
    <div className="flex lg:flex-row flex-col lg:mb-2 justify-center lg:border-4 border-teal-500 lg:rounded-2xl w-full ">
      <div className= "flex lg:flex-row flex-col justify-center items-center lg:gap-4 lg:px-2 w-full">
        <Image
          src={src}
          className="rounded-2xl object-cover cursor-pointer lg:w-1/2 w-full lg:m-3 p-[5px]"
          responsive
        />
        <div className="flex flex-col justify-center items-center lg:w-1/2 w-full dark:text-gray-200 px-2 text-center">
          <h2>Title: {appName}</h2>
          <p>Desc: {desc}</p>
          <a
            href={`${link}`}
            className="text-teal-500 italic items-center text-sm"
          >
            Click to view Live Page
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
