"use client";
import React, { useState } from "react";
import Project from "./Project";
import ileoja from "./../public/ileoja.jpg";
import km_kiosk from "./../public/km kiosk.jpg";
// import flowday from "./../public/flowday.jpg";
import oHealth from "./../public/oHealth.jpg";
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
        src={ileoja}
        appName={"A E-Commerce Marketing App"}
        desc={
          "An E-Commerce mobile Application built using React Native, tailwind Css, Redux and Rest API"
        }
        link={"https://apps.apple.com/ng/app/ileoja/id6443849011"}
      />
    );
  };
  const secondSlide = () => {
    return (
      <Project
        src={km_kiosk}
        appName={"Kid Management App"}
        desc={"Biult using React Native CLI, JavaScript, React Native StyleSheet"}
        link={"https://play.google.com/store/apps/details?id=com.kmkioskapp&hl=en_IN"}
      />
    );
  };
  const thirdSlide = () => {
    return (
      <Project
        src={oHealth}
        appName={"O'Health Medical App"}
        desc={"Built using Reat Native, Native StyleSheet and Redux State Management"}
        link={"https://play.google.com/store/apps/details?id=com.ohealth.ohealth&hl=en&gl=US"}
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
  className="flex w-full border-teal-500 border-2 rounded-md"
>
  {slides.map((item) => (
    <SwiperSlide key={item.id} className="">
      <div className="w-full lg:py-5">{item.slide}</div>
    </SwiperSlide>
  ))}
</Swiper>
}

export default Mobile;
