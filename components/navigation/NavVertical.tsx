"use client";

import Link from 'next/link'
import { usePathname } from "next/navigation";
import { explorerItems } from "./explorer";

export default function NavVertical() {

    const pathname = usePathname()
    return (
        <div className="sidebar w-[40px] sm:w-[70px] flex flex-col items-center secondary-bg-color"
        style={{ height: `calc(100vh - 30px -25px)` }} >
            {explorerItems.map((item,index) => (

                <div key={index} className={`p-2 mb-2 text-center w-full justify-center flex  ${pathname === item.path ? 'border-l-2 border-[#E981D9]' : 'secondary-bg-color'}`} >
                    <Link href={item.path} aria-label={item.name}>
                      <span className={`${pathname === item.path ? 'text-[#E981D9]' : ''}`}>{item.icons}</span> 
                    </Link>
                </div>

            ))
            }
        </div >
    )
}
