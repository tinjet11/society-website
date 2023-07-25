"use client"
import { BlogType } from '@/types';
import Image from 'next/image';
import React, { useState } from 'react';
import BlogDialog from './blog-dialog';

interface Props {
  data: BlogType,
}

const BlogCard = ({ data }: Props) => {

  const maxLength = 150; // Set the maximum number of characters to display

  // Truncate the text if it exceeds the maximum length
  const truncatedSubtitle = data.content.length > maxLength
    ? `${data.content.substring(0, maxLength)}...`
    : data.content;

  const [isOpen, setIsOpen] = useState(false)

  console.log(data.images)
  return (
    <>
      <div className="flex items-center justify-center w-full h-full ">
        <Image
          src={data.coverImageUrl}
          alt="blog cover image"
          width={400}
          height={400}
          className="blog-image object-fill"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold card-title ">{data.title}</h3>
        <p className="card-subtitle mt-2">{truncatedSubtitle}</p>
      </div>

      <div className="mt-4 flex flex-row justify-between items-center">
        <div>
          <p className="text-xs font-light card-subtitle">{new Date(data.date).toLocaleString()}</p>
        </div>
        <div className="flex justify-end m-2">
          <button className='button' onClick={() => setIsOpen(true)}>Read More</button>
        </div>
      </div>

      <BlogDialog isOpen={isOpen} setIsOpen={setIsOpen} data={data} />

      {/* //</div> */}
    </>
  );
};

export default BlogCard;
