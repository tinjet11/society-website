"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import { useTheme } from "next-themes";
import { Icons } from './Icons'


const NavHorizontal = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  function handleClick(path: string, expanded: Boolean) {
    router.push(path);
    setExpanded(!expanded);
  }

  const [expanded, setExpanded] = useState(false);

  const expand = () => {
    setExpanded(!expanded);
  };

  return (


    <div className='flex flex-row p-3 lg:hidden block bg-[#4A4772] sticky top-0 z-20'>
      {!expanded ?
        <Link href={'/'}><Image
          src={'/nav/logo.svg'}
          alt={'CSS logo'}
          width={50}
          height={50}
          className='object-contain'
        /></Link>
        : ''}

      <div className="nav_right_item">
        <div className='flex flex-row items-center gap-1 '>
          <div className='my-2 p-2 flex flex-row'>
          {
            theme === "light-grey" ?
              <Icons.sun /> : <Icons.moon />
          }
          <button onClick={() => theme === "light-grey" ? setTheme("dark") : setTheme("light-grey")}>
            Theme
          </button>
          </div>
         
          <button
            className="transition-all duration-300 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
            onClick={expand}
          >Menu</button>
          {expanded && (
            <div className="fixed top-0 left-0 z-[-1] w-screen h-full bg-gray-700 opacity-95 flex items-center justify-center">
              <ul className="text-indigo-100 text-bold text-3xl p-3">
                <MenuItem onClick={() => handleClick('/', expanded)}><p className='text-bold text-2xl p-3'>Home</p></MenuItem>
                <MenuItem onClick={() => handleClick('/about-us', expanded)}><p className='text-bold text-2xl p-3'>About Us</p></MenuItem>
                <MenuItem onClick={() => handleClick('/events', expanded)}><p className='text-bold text-2xl p-3'>Events</p></MenuItem>
                <MenuItem onClick={() => handleClick('/blog', expanded)}><p className='text-bold text-2xl p-3'>Blog</p></MenuItem>
                <MenuItem onClick={() => handleClick('/resources', expanded)}><p className='text-bold text-2xl p-3'>Resources</p></MenuItem>
                <MenuItem onClick={() => handleClick('/contact-us', expanded)}><p className='text-bold text-2xl p-3'>Contact Us</p></MenuItem>
              </ul>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default NavHorizontal