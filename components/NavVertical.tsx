"use client";

import { useTheme } from "next-themes";
import Link from 'next/link'

import { Moon, Sun } from "lucide-react";

import { usePathname } from "next/navigation";
import { explorerItems } from "./explorer";

export default function NavVertical() {

    const { theme, setTheme } = useTheme();
    const pathname = usePathname()
    return (
        <div className="sidebar w-[40px] sm:w-[70px] flex flex-col items-center primary-bg-color"
        style={{ height: `calc(100vh - 30px -25px)` }} 
        >
            {/*  <div className="h-full w-[40px] sm:w-[70px] left-0 top-8 bottom-24 fixed flex flex-col items-center primary-bg-color "> */}
            
            {explorerItems.map((item) => (

                <div className={`p-2 mb-2 text-center w-full justify-center flex  ${pathname === item.path ? 'border-l-2 border-[#E981D9]' : 'primary-bg-color'}`} >
                    <Link href={item.path} aria-label={item.name}>
                      <span className={`${pathname === item.path ? 'text-[#E981D9]' : ''}`}>{item.icons}</span> 
                    </Link>
                </div>

            ))
            }

     {/*        <div className='flex ml-0 p-2 mt-2 text-center w-full justify-center'>
                <button onClick={() => theme === "light-grey" ? setTheme("dark") : setTheme("light-grey")}>
                    {
                        theme === "light-grey" ?
                            <Sun /> : <Moon />
                    }
                </button>
            </div> */}
        </div >
    )
}
