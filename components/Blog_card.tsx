import { blogCardProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const Blog_card = ({ title, subtitle, date, image }: blogCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <Image
          src={`${image}`}
          alt="blog cover image"
          width={300}
          height={300}
          className="object-contain drop-shadow-2xl"
        />
      </div>

      <div className="text-center mt-4">
        <p className="text-xl font-bold">{title}</p>
      </div>

      <div className="text-center mt-2">
        <p>{subtitle}</p>
      </div>

      <div className="mt-auto text-right text-xs font-light">
        <p>Posted on {date}</p>
      </div>
    </div>

  )
}

export default Blog_card