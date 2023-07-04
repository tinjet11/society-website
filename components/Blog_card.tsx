import { blogCardProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const BlogCard = ({ title, subtitle, date, image,btn_txt }: blogCardProps) => {
  return (
    <>
      {/* <div  className="bg-gray-100 rounded-lg shadow-lg p-6 hover:bg-indigo-100 flex flex-col"> */}
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
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{subtitle}</p>
      </div>

      <div className="mt-4 flex flex-row justify-between items-center">
  <div> 
    <p className="text-xs font-light text-gray-400">{date}</p>
  </div>
  <div className="flex-grow m-2"> 
    <button className=" text-md text-indigo font-bold py-2 px-4 rounded w-full border border-indigo-700">
      {btn_txt}
    </button>
  </div>
</div>

      {/* //</div> */}
    </>
  );
};

export default BlogCard;
