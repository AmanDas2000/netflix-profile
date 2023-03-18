import React from 'react';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import { FaBook, FaGit, FaPlay } from 'react-icons/fa';
import parse from 'html-react-parser';
import { XMarkIcon } from '@heroicons/react/24/solid';


interface Props {
  state: boolean
  change: Function
  name: string
  designation:string
  detail: string 
  imageUrl:string
  startDate:string
  endDate:string
}

function ModalComponent({state,change,name,designation,detail,imageUrl,startDate,endDate}:Props) {
  
  return (
    <Modal
      open={state}
      onClose={() => change(false)}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full mt-12 md:mt-none  max-w-4xl overflow-hidden overflow-y-scroll rounded-xl scrollbar-hide md:mt-24"
    >
      <div>
        <button
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
          onClick={() => change(false)}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        {imageUrl?<div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-52 md:min-w-[260px] ">
          <Image
            src={imageUrl}
            className=" object-cover "
            layout="fill"
            alt="thumnail"
          />
        </div>:null}

        <div className="bg-[#141414] rounded-b-xl px-5 pt-3 pb-10">
          <div className="flex w-full justify-between pl-2 pt-7">
            <h1 className="flex justify-between w-[25%] align-middle text-l font-bold md:text-2xl lg:text-2xl">
              <div>{name}</div>
              {/* <button className="modalButton h-8 w-8">
                <FaBook className='h-4 w-4'/>
              </button>
              <button className="modalButton h-8 w-8">
                <FaGit className='h-4 w-4'/>
              </button> */}
            </h1>
            {startDate?<h1 className="font-light text-base md:text-xl lg:text-xl">
              {startDate} - {endDate}
            </h1>:null}
          </div>

          <p className="pl-2 pb-2 pt-2 max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-l lg:text-l">
            {designation}
          </p>
          <p className="pl-2 text-xs text-shadow-md md:text-base lg:max-w-l lg:text-l" style={{lineHeight:'1.65rem'}}>
            {parse(detail)}
          </p>
        </div>
      </div>
    </Modal>
  )
}

export default ModalComponent