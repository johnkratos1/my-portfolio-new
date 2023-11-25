"use client";
import React, { useState } from "react";
import Image from "next/image";

function ServiceCard({
  src,
  title,
  description,
  intro,
  list1,
  list2,
  list3,
  list4,
}) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex-col text-center shadow-black p-10 rounded-2xl my-10 dark:text-white h-full">
        <Image src={src} width={250} height={200} className="mx-auto" />
        <h3 className="text-lg font-medium pt-8 text-teal-500">{title}</h3>
        <p className="py-2 text-lg font-thin">{description}</p>
        <h4 className="text-teal-600 py-4 dark:text-teal-300 font-bold text-xl underline">{intro}</h4>
        <p className="text-gray-800 py-1 dark:text-teal-100">{list1}</p>
        <p className="text-gray-800 py-1 dark:text-teal-100">{list2}</p>
        <p className="text-gray-800 py-1 dark:text-teal-100">{list3}</p>
        <p className="text-gray-800 py-1 dark:text-teal-100">{list4}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
