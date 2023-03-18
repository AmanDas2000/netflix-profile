import React,{useState,useEffect} from 'react'
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

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
            <li className='headerLink'>Profile</li>
            <li className='headerLink'>Resume</li>
            <li className='headerLink'>LinkedIn</li>
            <li className='headerLink'>Github</li>
            <li className='headerLink'>Email</li>
        </ul>
        </div>

        <div className='flex items-center space-x-4 text-sm font-light'>
    
        <MagnifyingGlassIcon className='hidden  h-6 w-6 sm:inline'/>
        {/* //collapse to a menu */}
        <p className='hidden lg:inline'>Make your own</p>
        <BellIcon className='h-6 w-6'/>
        <Link href='/account'>
            <img
                src="https://rb.gy/g1pwyx"
                alt=""
                className="cursor-pointer rounded"
            />
        </Link>
        </div>
    </header>
  )
}

export default Header