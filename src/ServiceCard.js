import React from 'react'
import Image from 'next/image'

function ServiceCard({src, title, description, intro, list1, list2, list3, list4}) {
  return (
    <div className="flex-col text-center border-double border-4 border-teal-500 shadow-black p-10 rounded-2xl my-10 dark:bg-white">
    <Image src={src} width={250} height={200} className="mx-auto" />
    <h3 className="text-lg font-medium pt-8 pb-2">
      {title}
    </h3>
    <p className="py-2">
      {description}
    </p>
    <h4 className="text-teal-600 py-4">{intro}</h4>
    <p className="text-gray-800 py-1">{list1}</p>
    <p className="text-gray-800 py-1">{list2}</p>
    <p className="text-gray-800 py-1">{list3}</p>
    <p className="text-gray-800 py-1">{list4}</p>
  </div>
  )
}

export default ServiceCard
