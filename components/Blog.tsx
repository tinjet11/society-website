"use client"

import { useInfiniteQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect, useRef } from 'react';
import Blog_card from './Blog_card';
import { blogData } from '@/constant';
import { useIntersection } from '@mantine/hooks';

const posts = blogData;

const fetchPost = async (page: number) => {
    // this below code is to simulate the database fetching
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    return posts.slice((page - 1) * 3, page * 3);
};

const App = () => {
    const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
        ['query'],
        async ({ pageParam = 1 }) => {
            const response = await fetchPost(pageParam);
            return response;
        },
        {
            getNextPageParam: (_, pages) => {
                return pages.length + 1;
            },
            initialData: {
                pages: [posts.slice(0, 3)],
                pageParams: [1],
            },
        }
    );

    const lastPostRef = useRef<HTMLElement>(null);

    const { ref, entry } = useIntersection({
        root: lastPostRef.current,
        threshold: 1,
    });

    useEffect(() => {
        if (entry?.isIntersecting) fetchNextPage();
    }, [entry]);

    const _posts = data?.pages.flatMap((page) => page);
    return (
        <div className="container">
            <div className="flex flex-col m-2 bg-white rounded-lg shadow-lg p-4">
                <h1 className="text-center font-bold text-4xl mb-3">Blog</h1>
                <hr />
                <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 mt-10">
                    {_posts?.map((page, i) => {
                        const pageArray = Array.isArray(page) ? page : [page];
                        if (i === _posts.length - 1)
                            return (pageArray.map((post, index) => (
                                <div ref={ref}>
                                    <Blog_card
                                        key={index}
                                        title={post.title}
                                        subtitle={post.subtitle}
                                        date={post.date}
                                        image={post.image}
                                    />
                                </div>

                            )))

                        return pageArray.map((post, index) => (
                            <Blog_card
                                key={index}
                                title={post.title}
                                subtitle={post.subtitle}
                                date={post.date}
                                image={post.image}
                            />
                        ))
                    })}



                    {/* using button to expand */}
                    {/*   {
                        data?.pages.map((page,i)=>(
                            page.map((post, index) => (
                                <Blog_card
                                    key={index}
                                    title={post.title}
                                    subtitle={post.subtitle}
                                    date={post.date}
                                    image={post.image}
                                />
                            ))
                        ))
                    }
 */}
                </div>

                {/*                {  <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="mt-3 w-32 self-end bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
        >
          {isFetchingNextPage
            ? 'Loading More'
            : (data?.pages.length ?? 0) < 10
            ? 'Load More'
            : 'Nothing more to load'}
        </button> } */}
            </div>
        </div>
    );
};

const queryClient = new QueryClient();

const Blog = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    );
};

export default Blog;
