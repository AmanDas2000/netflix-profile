import React from 'react'
import {AiFillGithub,AiFillLinkedin,AiFillMail,AiFillProfile,AiOutlineClose} from 'react-icons/ai'
import { personalLinks } from '../personal-info/info'


const Footer = () => {
  return (
    <footer className="p-4 bg-[#141414] rounded-lg shadow md:flex md:items-center md:justify-between md:py-6 md:px-10">
      <span className="text-sm text-white-500 sm:text-center dark:text-white-400 flex">
        Made with ❤️ by Aman Das
      </span>
      <span className="text-sm mt-3 text-white-500 sm:text-center dark:text-white-400 flex w-[100%] md:w-[50%] justify-between">
            <a href={personalLinks.linkedIn} target='_blank'><div className="flex cursor-pointer hover:scale-105">
                <AiFillLinkedin size={20} />
                <p>‎ LinkedIn</p>
              </div></a>
            <a href={personalLinks.resume} target='_blank'><div className="flex cursor-pointer hover:scale-105">
                <AiFillProfile size={20} />
                <p>‎ Resume</p>
              </div></a>
            <a href={personalLinks.github} target='_blank'><div className="flex cursor-pointer hover:scale-105">
                <AiFillGithub size={20} />
                <p>‎ Github</p>
              </div></a>
            <a href={`mailto:${personalLinks.email}`} target='_blank'><div className="flex cursor-pointer hover:scale-105">
                <AiFillMail size={20} />
                <p>‎ Email</p>
              </div></a>
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-white-500 dark:text-white-400 sm:mt-0">
        <li>
          <a href='https://github.com/AmanDas2000/netflix-resume' target='_blank' className="mr-4 hover:underline md:mr-6 flex">
            <p>make your own</p>
            <p className='text-[red] font-semibold pl-1'>Netflix profile</p>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer