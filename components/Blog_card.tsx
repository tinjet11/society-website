import { blogCardProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const BlogCard = ({ title, subtitle, date, image, key }: blogCardProps) => {
  return (
    <div key={key} className="bg-gray-100 rounded-lg shadow-lg p-6 hover:bg-indigo-100 flex flex-col">
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

      <div className="mt-4 text-right text-xs font-light text-gray-400">
        <p>Posted on {date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
