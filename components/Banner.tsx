import { InformationCircleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { PiCoffeeFill } from 'react-icons/pi'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import ModalComponent from './ModalComponent'
import ModalComponentBanner from './ModalComponentBanner'
import { bestSkills, personalDetail } from '../personal-info/info'
import LeetCodeHeatmap from './LeetCodeStatsCard'

const leetCodeHeatmapTheme = {
  light: [
    '#ebedf0', // very low activity
    '#c6e48b', // low activity
    '#7bc96f', // medium activity
    '#239a3b', // high activity
    '#196127', // very high activity
  ],
  dark: [
    '#161b22', // very low activity (dark background)
    '#0e4429', // low activity
    '#006d32', // medium activity
    '#26a641', // high activity
    '#39d353', // very high activity
  ],
};



function Banner() {

  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const intervalDelayMilliseconds = 5000;
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        // reset index if current index is greater than array size
        return prevIndex + 1 < bestSkills.length ? prevIndex + 1 : 0;
      });
    }, intervalDelayMilliseconds);

    return () => clearInterval(interval);
  });

  const gifs = ['https://media2.giphy.com/media/okLCopqw6ElCDnIhuS/giphy.gif?cid=6c09b952kgi4mbf6h3skj5ura17rr5entfc6gcrtkndliw63&rid=giphy.gif&ct=g', 'https://media.tenor.com/c7IMfMhiHk8AAAAC/sheldon-brain-explode-big-bang-theory.gif', 'https://media3.giphy.com/media/f3jZ8moRBbEvNJjOtu/giphy.gif', 'https://media0.giphy.com/media/S6qkS0ETvel6EZat45/giphy.gif']

  return (
    <div className="flex flex-col space-y-2 pt-20 pb-10 md:space-y-4 lg:h-[60vh] lg:justify-end bg-blend-darken">

      <ModalComponentBanner
        state={modal}
        change={setModal}
        name={personalDetail.name}
        designation={personalDetail.designation}
        detail={personalDetail.detail}
        imageUrl={personalDetail.imageUrl}
        startDate={''}
        endDate={''}
      />
      <div className="-z-30 absolute top-0 left-0 h-[95vh] w-screen opacity-20">
        <Image
          layout="fill"
          src={gifs[index]}
          objectFit="cover"
          alt={'Banner-image'}
        />


      </div>
      <div className='absolute top-[87vh] left-0 w-screen shadow-[inset_0px_-60px_20px_-10px_rgba(20,20,20,1)] h-[10vh] -z-10'></div>
      <div className="flex flex-col lg:flex-row flex-wrap justify-start lg:justify-between items-start lg:items-center gap-y-6 lg:gap-y-0 gap-x-4">


        <div>
          <h1 className="text-2xl text-shadow-md font-bold md:text-4xl lg:text-7xl">
            Hey! My name is {personalDetail.firstName}
          </h1>
          <h1 className="text-l md:text-l lg:text-xl py-2">
            {'and I am the developer you need!'}{' '}
          </h1>
          {/* <p className="animate-pulse max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl"> */}
          <div className="max-w-[220px] text-shadow-md text-l md:text-2xl lg:text-2xl pt-4">
            <div className="typewriter text-xl md:text-2xl lg:text-4xl">
              <h1 key={bestSkills[index]}>{bestSkills[index]}</h1>
            </div>
          </div>

          <div className="flex space-x-3 pt-6">
            {/* <button className="modalButton bg-transparent text-white w-[200px]" onClick={()=>{setModal(true)}}>
          <FaPlay className="h-4 w-4 text-white md:h-7 md:w-7" />
          Play
          </button> */}
            <button className="bannerButton bg-white text-black" onClick={() => { setModal(true) }}>
              <PiCoffeeFill className="h-5 w-5 md:h-8 md:w-8" /> coffee?
            </button>
          </div>
        </div>
        <div>
             <LeetCodeHeatmap username={personalDetail.leetCodeUserName}/>
        </div>
      </div>

    </div>
  )
}

export default Banner