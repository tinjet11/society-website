"use client"

import { useInfiniteQuery ,QueryClient,QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

const posts = [
  { id: 1, title: 'post 1' },
  { id: 2, title: 'post 2' },
  { id: 3, title: 'post 3' },
  { id: 4, title: 'post 4' },
  { id: 5, title: 'post 5' },
  { id: 6, title: 'post 6' },
  { id: 7, title: 'post 7' },
  { id: 8, title: 'post 8' },
]

const fetchPost = async (page: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return posts.slice((page - 1) * 2, page * 2)
}


const App = () => {


  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['query'],
    async ({ pageParam = 1 }) => {
      const response = await fetchPost(pageParam)
      return response
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1
      },
      initialData: {
        pages: [posts.slice(0, 2)],
        pageParams: [1]
      }
    }

  )

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center text-gray-600 text-xl">

        post:
        {data?.pages.map((page, i) => (
          <div key={i}>
            {page.map((post) => (
              <div key={post.id}>{post.title}</div>
            ))}
          </div>
        ))}

        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>

          {isFetchingNextPage
            ? 'Loading More'
            : (data?.pages.length ?? 0) < 4
              ? 'load more'
              : 'Nothing more to load'
          }
        </button>
      </div>
    </div>
  )
}


const queryClient = new QueryClient();

const Temp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

export default Temp