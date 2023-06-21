import { blogCardProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const BlogCard = ({ title, subtitle, date, image }: blogCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:bg-indigo-300">
      <div className="flex justify-center">
        <Image
          src={`${image}`}
          alt="blog cover image"
          width={300}
          height={300}
          className="object-contain drop-shadow-2xl"
        />
      </div>

      <div className="text-start mt-4">
        <p className="text-xl font-bold text-gray-800">{title}</p>
      </div>

      <div className="text-start mt-2 ml-2">
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <div className="mt-auto text-right text-xs font-light text-gray-400">
        <p>Posted on {date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
