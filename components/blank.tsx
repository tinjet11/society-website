import Image from 'next/image'
import React from 'react'

const blank = () => {
    return (
        <div className="flex flex-col items-center min-h-screen opacity-20">
            <Image
            src={'/grey-css-logo.svg'}
            width={800}
            height={800}
            alt='grey-css-logo'
            className='mt-12'
            />
        </div>
    )
}

export default blank