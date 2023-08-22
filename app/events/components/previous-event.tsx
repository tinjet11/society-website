"use client"

import { BlogType } from '@/types';
import { useState, useEffect } from 'react';
import getBlogs from '@/actions/getBlogs';
import BlogCard from './Blog_card';
import { usePathname } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import LinkPlaceholder from '@/components/ui/link-placeholder';


export const revalidate = 0;
interface Props {
    data: BlogType[];
}
const PreviousEvent = ({ data }: Props) => {
    const pathname = usePathname();
    /* 
        const [blog, setBlog] = useState<BlogType[]>([]);
        const [isLoading, setIsLoading] = useState(true);
        const [isMounted, setIsMounted] = useState(false);
        useEffect(() => {
    
            const fetchBlogs = async () => {
                setIsLoading(true)
                const blogs = await getBlogs();
                setBlog(blogs)
                setIsLoading(false)
            }
    
    
            fetchBlogs();
        }, []);
    
    
        useEffect(() => {
            setIsMounted(true);
        }, []);
    
        //prevent hydration error
        if (!isMounted) {
            return null;
        } */


    return (

        <>

            {data.length === 0 && (
                <div className='my-3'>
                    <p>No previous event available at this time.<br />
                        Follow us on <LinkPlaceholder text='social media' url='https://linktr.ee/unmcss' /> or subscribe to our newsletter for latest update!
                    </p>
                </div>
            )}

            <div className="flex flex-col gap-3 md:grid md:grid-cols-2 mt-10">

                {pathname === '/events' && data.map((item) => (
                    <div className="card-bg rounded-lg shadow-2xl p-4 flex flex-col" key={item.id} id={item.id} >
                        <BlogCard
                            data={item}
                        />
                    </div>
                ))}

                {pathname === '/' && data.slice(0, 2).map((item) => (
                    <div className="card-bg rounded-lg shadow-2xl p-4 flex flex-col" key={item.id} id={item.id} >
                        <BlogCard
                            data={item}
                        />
                    </div>
                ))}

            </div>
        </>



    )
}


export default PreviousEvent