"use client";
import React, { useState } from "react";
import Project from "./Project";
import movie from "./../public/movie_app.png";
import coinnigga from "./../public/coinniga.jpg";
import flowday from "./../public/flowday.jpg";
import neotisa from "./../public/neotisa.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";

function Projects() {
  const [darkMode, setDarkMode] = useState(false);

  const firstSlide = () => {
    return (
      <Project
        src={movie}
        appName={"Movie App"}
        desc={
          "A nice movie web Application built using React.Js, Next.Js, TailwindCss and TMDB API"
        }
        link={"https://my-movie-app-plum.vercel.app"}
      />
    );
  };
  const secondSlide = () => {
    return (
      <Project
        src={coinnigga}
        appName={"Thrift Web App"}
        desc={"Build a thrift application JacvaScript, Css, and HTML"}
        link={"https://coinnigga.vercel.app"}
      />
    );
  };
  const thirdSlide = () => {
    return (
      <Project
        src={flowday}
        appName={"A Crypo Web App"}
        desc={"Built using JavaScript, Tailwind and React"}
        link={"https://flowday-frontend.vercel.app"}
      />
    );
  };
  const fourthSlide = () => {
    return (
      <Project
        src={neotisa}
        appName={"An E-Learning Platform"}
        desc={"Built using JavaScript, Tailwind and Next JS"}
        link={"https://neotisa-e-learning.vercel.app/"}
      />
    );
  };

  const slides = [
    {
      id: 1,
      slide: firstSlide(),
    },
    {
      id: 2,
      slide: secondSlide(),
    },
    {
      id: 3,
      slide: thirdSlide(),
    },
    {
      id: 4,
      slide: fourthSlide(),
    }
  ];

  return <Swiper
  breakpoints={{
    340: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    708: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  }}
  freeMode={{
    enabled: true,
    sticky: true,
  }}
  pagination={{
    clickable: true,
    enabled: true,
  }}
  autoplay={{
    enabled: true,
  }}
  speed='500'
  modules={[FreeMode, Pagination, Autoplay, Navigation]}
  className="flex w-full border-teal-500 border-2 rounded-md"
>
  {slides.map((item) => (
    <SwiperSlide key={item.id} className="">
      <div className="w-full lg:py-5">{item.slide}</div>
    </SwiperSlide>
  ))}
</Swiper>
}

export default Projects;
