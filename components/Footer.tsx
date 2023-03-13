import React from 'react'

const Footer = () => {
  return (
    <footer className="p-4 bg-[#141414] rounded-lg shadow md:flex md:items-center md:justify-between md:py-6 md:px-10">
      <span className="text-sm text-white-500 sm:text-center dark:text-white-400">
        Made with ❤️ by Aman Das
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-white-500 dark:text-white-400 sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 flex">
            <p>make your own</p>
            <p className='text-[red] font-semibold pl-1'>Netflix profile</p>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer