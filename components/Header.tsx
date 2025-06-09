import React,{useState,useEffect} from 'react'
import Image from 'next/image';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { personalDetail,personalLinks } from '../personal-info/info';


function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll=()=>{
        if(window.scrollY>0){
            setIsScrolled(true);
        }else{
            setIsScrolled(false);
        }
      }

      window.addEventListener('scroll',handleScroll);
      return ()=>{
        window.removeEventListener('scroll',handleScroll);
      }
    }, [])
    
  return (
    <header className={`${isScrolled && 'bg-[#141414]'} shadow-[inset_0px_50px_30px_-10px_rgba(0,0,0,0.9)]`}>
        <div className='flex items-center space-x-2 md:space-x-10'>
            <img
                src="https://rb.gy/ulxxee"
                width={100}
                height={100}
                className="cursor-pointer object-contain"
            />
        <ul className='hidden space-x-4 md:flex'>
            <a className='headerLink' href={personalLinks.linkedIn} target='_blank'>LinkedIn</a>
            <a className='headerLink' href={personalLinks.resume} target='_blank'>Resume</a>
            <a className='headerLink' href={personalLinks.leetCode} target='_blank'>Leetcode</a>
            <a className='headerLink' href={personalLinks.github} target='_blank'>Github</a>
            <a className='headerLink' href={`mailto:${personalLinks.email}`} target='_blank'>Email</a>
        </ul>
        </div>

        <div className='flex items-center space-x-4 text-sm font-light'>
    
        <MagnifyingGlassIcon className='hidden  h-6 w-6 sm:inline'/>
        {/* //collapse to a menu */}
        <a className='headerLink' href='https://github.com/AmanDas2000/netflix-profile' target='_blank'>Make your own</a>
        <a className='headerLink' href='https://www.linkedin.com/in/amandas7/' target='_blank'>created by Aman Das</a>
        {/* <BellIcon className='h-6 w-6'/> */}
            <Image
                // src="https://rb.gy/g1pwyx" //this is default netflix profile icon
                src={personalDetail.imageUrl}
                className="object-cover rounded-[30px]"
                alt="Aman Das"
                width={30}
                height={30}
              />
        
        </div>
    </header>
  )
}

export default Header