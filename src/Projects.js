"use client";
import React, { useState } from "react";
import Project from "./Project";
import movie from "./../public/movie_app.png";
import music from "./../public/music_app.png";
import calculator from "./../public/calculator.png";
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
        src={music}
        appName={"Music App"}
        desc={"Build a simple music App using HTML, CSS and Vanilla JavaScript"}
        link={"https://music-player-pied-mu.vercel.app"}
      />
    );
  };
  const thirdSlide = () => {
    return (
      <Project
        src={calculator}
        appName={"Simple Calculator"}
        desc={"A Simple Calculator built using HTML, CSS and JavaScript"}
        link={"https://johnkratos1.github.io/Calculator-App/updated.html"}
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
  className="flex w-full border-red-500 border-2"
>
  {slides.map((item) => (
    <SwiperSlide key={item.id} className="">
      <div className="w-full lg:py-5">{item.slide}</div>
    </SwiperSlide>
  ))}
</Swiper>
}

export default Projects;
