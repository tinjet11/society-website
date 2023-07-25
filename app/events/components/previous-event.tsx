"use client"

import { BlogType } from '@/types';
import { useState, useEffect } from 'react';
import getBlogs from '@/actions/getBlogs';
import BlogCard from './Blog_card';
import { usePathname } from 'next/navigation';


export const revalidate = 0;

const PreviousEvent = () => {

    const [blog, setBlog] = useState<BlogType[]>([]);
    const [isMounted, setIsMounted] = useState(false);
    const pathname = usePathname();
    useEffect(() => {

        const fetchBlogs = async () => {
            const blogs = await getBlogs();
            setBlog(blogs)
        }


        fetchBlogs();
    }, []);


    useEffect(() => {
        setIsMounted(true);
    }, []);

    //prevent hydration error
    if (!isMounted) {
        return null;
    }


    return (
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2 mt-10">

            {pathname === '/events' && blog.map((item) => (
                <div className="card-bg rounded-lg shadow-2xl p-4 flex flex-col" key={item.id} id={item.id} >
                    <BlogCard
                        data={item}
                    />
                </div>
            ))}

            {pathname === '/' && blog.slice(0, 2).map((item) => (
                <div className="card-bg rounded-lg shadow-2xl p-4 flex flex-col" key={item.id} id={item.id} >
                    <BlogCard
                        data={item}
                    />
                </div>
            ))}

        </div>
    )
}

export default PreviousEvent