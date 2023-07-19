"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { explorerItems } from './explorer';



const tab = () => {
    const pathname = usePathname()
    return (
        <div className='tabs px-2 mb-4 flex primary-bg-color overflow-x-auto'>
        <div className="cursor-pointer flex space-x-4">
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className={`w-full py-3 px-3 flex items-center text-sm ${pathname === item.path ? 'bg-[#363451] border-t-2 border-[#E981D9]' : 'primary-bg-color'} flex-shrink-0`}>
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                  className='hidden md:block'
                />{' '}
                <p className='ml-[5px]'>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
}

export default tab