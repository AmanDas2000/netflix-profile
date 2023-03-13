import React from 'react'
import Image from 'next/image'
import ModalComponent from './ModalComponent'


interface Props {
    name: string
    designation:string
    detail: string 
    imageUrl:string
}

function Thumbnail({name,designation,detail,imageUrl}:Props) {
    const [modal, setModal] = React.useState(false);
  return (
    <div>
      <ModalComponent
        state={modal}
        change={setModal}
        name={name}
        designation={designation}
        detail={detail}
        imageUrl={imageUrl}
      />

      <div
        onClick={() => setModal(true)}
        className={`md:hover:scale-110 relative h-32 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-40 md:min-w-[260px] `}
      >
        <Image
          src={imageUrl}
          className="rounded-sm object-cover md:rounded-md -z-10 brightness-50"
          layout="fill"
          alt="thumnail"
        />
        

        <h1 className="pl-3 pt-20 md:pt-24  text-l text-shadow-md font-bold md:text-xl lg:text-xl ">
          {name}
        </h1>
        <p className="pl-3 max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-l lg:text-l">
          {designation}
        </p>
        
      </div>
    </div>
  )
}

export default Thumbnail