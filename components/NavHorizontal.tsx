import Image from 'next/image'
import React from 'react'
const Nav_horinzontal = () => {
  return (
    <div className='flex flex-row p-3 lg:hidden block bg-[#4A4772] sticky top-0 z-20'>
      <Image
        src={'/nav/logo.svg'}
        alt={'CSS logo'}
        width={50}
        height={50}
        className='object-contain'
      />
      <div className="nav_right_item">
        <div className='flex flex-row items-center gap-1 '>
          Menu
        </div>
      </div>

    </div>
  )
}

export default Nav_horinzontal