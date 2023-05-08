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
      <div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
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
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl font-serif">
              John Ayomide Ezekiel
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl font-burtons dark:text-white">Front-End Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto font-mono dark:text-gray-200">
              Freelancer providing services for programming and needs. Join me
              down and let's get cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://twitter.com/JohnAyo72850989">
              <AiFillTwitterCircle className="text-blue-400" />
            </a>
            <a href="https://www.linkedin.com/in/john-ayomide-5055791aa/">
              <AiFillLinkedin className="text-blue-500" />
            </a>
            <a href="">
              <AiOutlineWhatsApp className="text-green-600" />
            </a>
            <a href="https://github.com/johnkratos1">
              <AiFillGithub className="text-neutral-800 dark:text-white" />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden mb-10 md:h-96 md:w-96">
            <Image src={pic} fill cover className="pr-5" />
          </div>
        </section>
        {/* This is another section */}
        <section>
          <div className="p-5 rounded-md dark:bg-white mb-10">
            <h3 className="text-3xl py-1 text-teal-600">Services I offer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 font-serif">
              Since the beginning of my journey as a freelance developer, I've
              done remote work for{" "}
              <span className="text-teal-500">Clients</span> and collaborated
              with talented people to create{" "}
              <span className="text-teal-500"> Digital Products</span> for both
              business and consumer use.
            </p>
            <p text-md py-5 leading-8 text-gray-800>
              I offer from a wide range of services, including{" "}
              <span className="text-teal-500">Web Design and Development</span>,{" "}
              <span className="text-teal-500">Mobile App Development</span>,{" "}
              <span className="text-teal-500">Website Maintenance</span> and{" "}
              <span className="text-teal-500">teaching</span>.
            </p>
          </div>
          <div className="lg:flex gap-10">
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

            <ServiceCard
              src={code}
              title={"Elegant Mobile App Development"}
              description={
                "Creating Elegant Mobile Appliction for both ios and Android devices "
              }
              intro={"Design Tools I use"}
              list1={"React Native"}
            />

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
            />
          </div>
        </section>
        <section>
          <div className="p-10 rounded-md dark:bg-white">
            <h3 className="text-3xl py-1 text-teal-400">Portfolio</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              I develop my skills through building and participating on real
              life <span className="text-teal-500">Projects </span>
              by collaborated with talented people to create
              <span className="text-teal-500"> Digital Products</span> for both
              business and consumer use.
            </p>
            <h2 className="text-center text-2xl text-teal-600">
              List of Projects and Web Application
            </h2>
          </div>
        </section>
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

        <Footer />
      </div>
    </main>
  );
}
