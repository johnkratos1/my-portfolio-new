import React from 'react'
import Image from 'next/image'

function Projects({src, appName, desc, link }) {
  return (
    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap lg:m-auto">
    <div className="basis-1/3 flex-1 sd:flex-col justify-center lg:gap-20 px-3 md:border-double border-4 border-teal-500 py-5 rounded-2xl md:flex md:gap-10"> 
      <Image
        src={src}
        className="rounded-lg object-cover cursor-pointer mb-3 md:w-56 lg:w-auto"
        width={"100%"}
        height={"100%"}
        responsive
      />
      <div className="flex flex-col justify-center items-center md:mr-5 max-w-screen-sm dark:text-gray-200">
        <h2>Title: {appName}</h2>
        <p>Desc: {desc}</p>
        <a href={`${link}`} className="text-teal-500 italic items-center text-sm">Click to view Live Page</a>
      </div>
    </div>
  </div>
  )
}

export default Projects
