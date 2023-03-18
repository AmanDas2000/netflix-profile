import React from 'react'
import Image from 'next/image'


interface Props {
    name: string
    designation:string
    detail: string 
    imageUrl:string
    id:number
}

function CircularThumbnail({name,designation,detail,imageUrl,id}:Props) {
    
  return (
    <div>
      <div className="flex justify-end min-w-[9rem] md:min-w-[13rem] align-middle overflow-y-clip">
        <div>
          <h1 className="leading-[6rem] text-[7.5rem] md:text-[10.5rem] font-outline-2 text-black font-bold md:leading-[8rem]">
            {id}
          </h1>
        </div>
        <div
          className={`relative h-24 w-24 cursor-pointer transition duration-200 ease-out md:h-32 md:w-32 my-auto ml-[-1.5rem]`}
        >
          <Image
            src={imageUrl}
            className="rounded-[400px] object-cover bg-white"
            layout="fill"
            alt="thumnail"
          />
        </div>
      </div>
      <div className="flex w-full justify-center ">
        <h1 className="text-l pt-4 text-shadow-md md:text-xl lg:text-xl text-white">
          {name}
        </h1>
        {/* <p className="pl-3 max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-l lg:text-l">
          {designation}
        </p> */}
      </div>
    </div>
  )
}

export default CircularThumbnail