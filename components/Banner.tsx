import { InformationCircleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React,{useState,useEffect} from 'react'
import { FaPlay } from 'react-icons/fa'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import ModalComponent from './ModalComponent'
import ModalComponentBanner from './ModalComponentBanner'



function Banner() {

  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const intervalDelayMilliseconds = 5000;
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        // reset index if current index is greater than array size
        return prevIndex + 1 < arr.length ? prevIndex + 1 : 0;
      });
    }, intervalDelayMilliseconds);

    return () => clearInterval(interval);
  });

  const arr=['React','Redux','Node','JavaScript']

  const gifs=['https://media2.giphy.com/media/okLCopqw6ElCDnIhuS/giphy.gif?cid=6c09b952kgi4mbf6h3skj5ura17rr5entfc6gcrtkndliw63&rid=giphy.gif&ct=g','https://media.tenor.com/c7IMfMhiHk8AAAAC/sheldon-brain-explode-big-bang-theory.gif','https://media3.giphy.com/media/f3jZ8moRBbEvNJjOtu/giphy.gif','https://media0.giphy.com/media/S6qkS0ETvel6EZat45/giphy.gif']
  
  return (
    <div className="flex flex-col space-y-2 pt-20 pb-10 md:space-y-4 lg:h-[60vh] lg:justify-end bg-blend-darken">
      <ModalComponentBanner
        state={modal}
        change={setModal}
        name={"Aman Das"}
        designation={"Intern @ Oracle"}
        detail={"I am a final year student constantly learning and evolving at software development and I ❤️ JavaScript. I have freelance and internship experience with full stack development."}
        imageUrl={"https://lh3.googleusercontent.com/pw/AMWts8Bb8x7b8yywTbWudcP2XTy5uX5yoQXDVsG6B650BBFZHD2EtuphlZCTELrIbF76nxi1Sry1TX_PHFLqNqcRBxP2CFcTvcwONVRmQFmQB0J6mVWVbbOddM-888mxFgQ2zGFDNsieSIvFPwDv_cx4kxkymA=w2096-h1578-s-no?authuser=0"}
        startDate={''}
        endDate={''}
      />
      <div className="-z-30 absolute top-0 left-0 h-[95vh] w-screen opacity-60">
        <Image
          layout="fill"
          src={gifs[index]}
          objectFit="cover"
          alt={'Banner-image'}
        />


      </div>
      <div className='absolute top-[87vh] left-0 w-screen shadow-[inset_0px_-60px_20px_-10px_rgba(20,20,20,1)] h-[10vh] -z-10'></div>

      <h1 className="text-2xl text-shadow-md font-bold md:text-4xl lg:text-7xl">
        Hey! My name is Aman
      </h1>
      <h1 className="text-l md:text-l lg:text-xl">
        {'and I am the developer you need!'}{' '}
      </h1>
      {/* <p className="animate-pulse max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl"> */}
      <div className="max-w-[220px] text-shadow-md text-l md:text-2xl lg:text-2xl ">
        <div className="typewriter text-xl md:text-2xl lg:text-4xl">
          <h1 key={arr[index]}>{arr[index]}</h1>
        </div>
      </div>

      <div className="flex space-x-3 pt-3">
        {/* <button className="bannerButton bg-white text-black" onClick={()=>{setModal(true)}}>
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button> */}

        <button className="bannerButton bg-white text-black" onClick={() => {setModal(true)}}>
          <FaPlay className="h-5 w-5 md:h-8 md:w-8" /> coffee?
        </button>
      </div>
    </div>
  )
}

export default Banner