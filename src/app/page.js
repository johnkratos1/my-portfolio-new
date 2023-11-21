"use client";

import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillGithub,
} from "react-icons/ai";
import pic from "../../public/me2.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import movie from "../../public/movie_app.png";
import music from "../../public/music_app.png";
import manage from "../../public/manage.png";
import calculator from "../../public/calculator.png";
import { useState } from "react";
import Footer from "@/Footer";
import ServiceCard from "@/ServiceCard";
import Projects from "./Projects";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={darkMode ? "dark" : ""}>
      <div className="flex flex-col bg-white px-[5px] md:px-20 lg:px-0 dark:bg-gray-900 w-[100%]">
        <section className="mb-16">
          <nav className="py-4 flex justify-between lg:px-5 px-2 mx-[2px]">
            <h1 className="text-2xl font-burtons text-teal-950 italic overline dark:text-teal-100">
              Web Developer
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-yellow-400"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 dark:text-black"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center mt-4">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl font-serif">
              John Ayomide Ezekiel
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl font-burtons dark:text-white">
              Front-End Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto font-mono dark:text-gray-200">
              Freelancer providing services for programming and needs. Join me
              down and let's get cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-between w-3/4 px-5 mx-auto mt-3">
            <a href="https://twitter.com/JohnAyo72850989">
              <AiFillTwitterCircle className="text-blue-400" />
            </a>
            <a href="https://www.linkedin.com/in/john-ayomide-5055791aa/">
              <AiFillLinkedin className="text-blue-500" />
            </a>
            <a href="https://wa.me/2349036802688">
              <AiOutlineWhatsApp className="text-green-600" />
            </a>
            <a href="https://github.com/johnkratos1">
              <AiFillGithub className="text-neutral-800 dark:text-white" />
            </a>
          </div>
          {/* <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden mb-10 md:h-96 md:w-96 border-red-500 border-2">
            <Image src={pic} fill cover className="pr-5" />
          </div> */}
        </section>
        {/* This is another section */}
        <section className="w-full lg:px-8 px-[4px]">
          <div className="rounded-md dark:text-white dark:rounded-lg p-4 w-full lg:w-full mb-10">
            <h2 className="text-3xl text-teal-600 font-bold italic">WHAT I DO </h2>
            <p className="text-md py-5 leading-8 text-gray-800 font-serif dark:text-white">
              Since the beginning of my journey as a <span className="text-teal-500">Self-taught</span> Developer, I've
              done several remote work for{" "}
              <span className="text-teal-500">Clients</span> and collaborated
              with talented people to create{" "}
              <span className="text-teal-500"> Digital Products</span> for both
              business and consumer use.
            </p>
            <p text-md py-5 leading-8 text-gray-800>
              I offer a wide range of services which includes{" "}
              <span className="text-teal-500">Web Design and Development</span>,{" "}
              <span className="text-teal-500">Mobile App Development</span>,{" "}
              <span className="text-teal-500">Website Maintenance</span> and{" "}
              <span className="text-teal-500">Code Classes </span> for new and inspiring programmers.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-evenly w-full mx-auto gap-4 px-[5px] mb-5 items-center lg:p-5">
          <div className="lg:w-1/3 h-full">
            <ServiceCard
              src={design}
              title={"Beautiful Web Designs"}
              description={`Creating Custome web designs suited for your needs following core          design theory and Best Practices in order to achieve Customer desire results`}
              intro={"Design Tools I use"}
              list1={"HTML"}
              list2={"CSS"}
              list3={"JAVASCRIPT"}
              list4={"React Js & Next Js"}
            />
            </div>

            <div className="lg:w-1/3">
            <ServiceCard
              src={code}
              title={"Elegant Mobile App Development"}
              description={
                "Creating Elegant Mobile Appliction for both ios and Android devices "
              }
              intro={"Design Tools I use"}
              list1={"React Native"}
            />
            </div>

            <div className="lg:w-1/3">
            <ServiceCard
              src={manage}
              title={"We Manage Existing Web Sites"}
              description={
                "Providing Support and Optimization to existing App and Websites to improve Productivity and Security "
              }
              intro={"How we do what we do:"}
              list1={
                "Provide SEO Implementation - To Boost Search Engine Optimazation"
              }
              list2={
                "Code Review - Rewrite Legacy Codes to meet current Practices and Standard for better Performance"
              }
            /> </div>
          </div>
        </section>
        <section className="px-[2px] lg:px-8">
          <div className="p-10 rounded-md flex flex-col justify-center items-center">
            <h3 className="text-3xl py-1 text-teal-400">Portfolio</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              I develop my skills through building and participating on real
              life <span className="text-teal-500">Projects </span>
              by collaborating with talented developers to create
              <span className="text-teal-500"> Digital Products</span> for both
              business and consumer use.
            </p>
            <h2 className="text-center lg:text-3xl text-xl text-teal-500 lg:mt-[4px]">
              List of Projects and Web Application
            </h2>
          </div>
        </section>

        <section className="flex flex-col lg:px-32">
        <Projects
          src={movie}
          appName={"Movie App"}
          desc={
            "A nice movie web Application built using React.Js, Next.Js, TailwindCss and TMDB API"
          }
          link={"https://my-movie-app-plum.vercel.app"}
        />

        <Projects
          src={music}
          appName={"Music App"}
          desc={
            "Build a simple music App using HTML, CSS and Vanilla JavaScript"
          }
          link={"https://music-player-pied-mu.vercel.app"}
        />

        <Projects
          src={calculator}
          appName={"Simple Calculator"}
          desc={"A Simple Calculator built using HTML, CSS and JavaScript"}
          link={"https://johnkratos1.github.io/Calculator-App/updated.html"}
        />
        </section>


        <Footer />
      </div>
    </main>
  );
}
