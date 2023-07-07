import { blogCardProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const BlogCard = ({ title, subtitle, date, image,btn_txt }: blogCardProps) => {
  return (
    <>
      <div className="flex justify-center">
        <Image
          src={`${image}`}
          alt="blog cover image"
          width={300}
          height={200}
          className="object-cover rounded-lg"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold card-title ">{title}</h3>
        <p className="card-subtitle mt-2">{subtitle}</p>
      </div>

      <div className="mt-4 flex flex-row justify-between items-center">
  <div> 
    <p className="text-xs font-light card-subtitle">{date}</p>
  </div>
  <div className="flex-grow m-2"> 
    <button className=" text-md font-bold py-2 px-4 rounded w-full border border-indigo-700">
      {btn_txt}
    </button>
  </div>
</div>

      {/* //</div> */}
    </>
  );
};

export default BlogCard;
