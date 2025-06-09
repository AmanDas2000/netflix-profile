import React from 'react';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import { FaBook, FaGit, FaPlay } from 'react-icons/fa';
import parse from 'html-react-parser';
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillProfile, AiOutlineClose } from 'react-icons/ai'
import { SiLeetcode } from "react-icons/si";
import { personalLinks } from '../personal-info/info';


interface Props {
  state: boolean
  change: Function
  name: string
  designation: string
  detail: string
  imageUrl: string
  startDate: string
  endDate: string
}

function ModalComponentBanner({ state, change, name, designation, detail, imageUrl, startDate, endDate }: Props) {

  return (
    <Modal
      open={state}
      onClose={() => change(false)}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full mt-12 md:mt-none max-w-4xl overflow-hidden overflow-y-scroll rounded-xl scrollbar-hide md:mt-24"
    >
      <div className="flex w-full bg-[#141414] min-h-[50%] rounded-xl justify-evenly align-middle flex-wrap">
        <button
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
          onClick={() => change(false)}
        >
          <AiOutlineClose className="h-6 w-6" />
        </button>
        <div className="w-[100%] md:w-[50%] h-full flex justify-center align-middle mt-12 md:my-auto">
          {imageUrl ? (
            <div className="relative h-52 w-52 cursor-pointer transition duration-200 ease-out md:h-52 md:w-52 ">
              <Image
                src={imageUrl}
                className="object-cover rounded-[400px]"
                layout="fill"
                alt="thumnail"
              />
            </div>
          ) : null}
        </div>
        <div className="w-[100%] md:w-[50%]">
          <div className=" rounded-b-xl px-5 pt-3 pb-10">
            <div className="flex w-full justify-between pl-2 pt-7">
              <h1 className="flex justify-between align-middle text-l font-bold md:text-2xl lg:text-2xl">
                <div>{name}</div>
              </h1>
              {startDate ? (
                <h1 className="font-light text-base md:text-xl lg:text-xl">
                  {startDate} - {endDate}
                </h1>
              ) : null}
            </div>

            <p className="pl-2 pb-6 pt-2 max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-l lg:text-l">
              {designation}
            </p>

            <p
              className="pl-2 text-xs text-shadow-md md:text-base lg:max-w-l lg:text-l"
              style={{ lineHeight: '1.65rem' }}
            >
              {parse(detail)}
            </p>

            <div className="flex w-full md:w-[90%] pl-2 pt-7 justify-between text-center text-xs">
              <a href={personalLinks.linkedIn} target='_blank'><div className="flex flex-col cursor-pointer hover:scale-105">
                <AiFillLinkedin size={38} />
                <p>LinkedIn</p>
              </div></a>
              <a href={personalLinks.resume} target='_blank'><div className="flex flex-col cursor-pointer hover:scale-105">
                <AiFillProfile size={38} />
                <p>Resume</p>
              </div></a>
              <a href={personalLinks.leetCode} target='_blank'><div className="flex flex-col cursor-pointer hover:scale-105">
                <SiLeetcode size={38} />
                <p>Leetcode</p>
              </div></a>
              <a href={personalLinks.github} target='_blank'><div className="flex flex-col cursor-pointer hover:scale-105">
                <AiFillGithub size={38} />
                <p>Github</p>
              </div></a>
              <a href={`mailto:${personalLinks.email}`} target='_blank'><div className="flex flex-col cursor-pointer hover:scale-105">
                <AiFillMail size={38} />
                <p>Email</p>
              </div></a>
              

            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalComponentBanner