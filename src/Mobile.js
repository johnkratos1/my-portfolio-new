"use client";
import React, { useState } from "react";
import Project from "./Project";
import melearn from "./../public/melearn.jpg";
import km_kiosk from "./../public/km kiosk.jpg";
// import flowday from "./../public/flowday.jpg";
import kulipa from "./../public/kulipa.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";

function Mobile() {
  const [darkMode, setDarkMode] = useState(false);

  const firstSlide = () => {
    return (
      <Project
        src={melearn}
        appName={"E-learning Mobile App"}
        desc={
          "An E-Learning mobile Application built using React Native Expo, tailwind Css, Redux and Rest API"
        }
        // link={"https://my-movie-app-plum.vercel.app"}
      />
    );
  };
  const secondSlide = () => {
    return (
      <Project
        src={km_kiosk}
        appName={"Kid Management App"}
        desc={"Biult using React Native CLI, JavaScript, React Native StyleSheet"}
        // link={"coinnigga.vercel.app"}
      />
    );
  };
  const thirdSlide = () => {
    return (
      <Project
        src={kulipa}
        appName={"A Rider Service App"}
        desc={"Built using Reat Native Expo for iOS and Android, Natrive StyleSheet"}
        // link={"https://flowday-frontend.vercel.app"}
      />
    );
  };
//   const fourthSlide = () => {
//     return (
//       <Project
//         src={neotisa}
//         appName={"An E-Learning Platform"}
//         desc={"Built using JavaScript, Tailwind and Next JS"}
//         link={"https://neotisa-e-learning.vercel.app/"}
//       />
//     );
//   };

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
    // {
    //   id: 4,
    //   slide: fourthSlide(),
    // }
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

export default Mobile;
