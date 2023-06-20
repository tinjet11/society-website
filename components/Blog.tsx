import Image from 'next/image'
import React from 'react'
import Blog_card from './Blog_card'

const Blog = () => {
    return (
        <div className="container">
        <div className='flex flex-col m-2 p-2'>
            <h1 className='text-center font-bold text-4xl m-3'>Blog</h1>
            <hr />
            
            <div className='flex flex-col sm:flex-row gap-3 mt-4 p-2 justify-evenly'>
                <Blog_card
                    title={'CS induction night'}
                    subtitle={'Having fun'}
                    date={'16 October 2023'}
                    image={'/nav/logo.svg'}
                />

                <Blog_card
                    title={'CS induction night'}
                    subtitle={'Having fun'}
                    date={'16 October 2023'}
                    image={'/nav/logo.svg'}
                />
                 <Blog_card 
             title={'CS induction night'} 
             subtitle={'Having fun'} 
             date={'16 October 2023'} 
             image={'/nav/logo.svg'}             
             />
            </div>
            <div className='flex flex-col sm:flex-row gap-4 mt-4 p-2 justify-evenly'>
                <Blog_card
                    title={'CS induction night'}
                    subtitle={'Having fun'}
                    date={'16 October 2023'}
                    image={'/nav/logo.svg'}
                />

                <Blog_card
                    title={'CS induction night'}
                    subtitle={'Having fun'}
                    date={'16 October 2023'}
                    image={'/nav/logo.svg'}
                />
                 <Blog_card 
             title={'CS induction night'} 
             subtitle={'Having fun'} 
             date={'16 October 2023'} 
             image={'/nav/logo.svg'}             
             />
            </div>
            <div className='flex flex-col  sm:flex-row gap-4 mt-4 p-2 justify-evenly'>
                <Blog_card
                    title={'CS induction night'}
                    subtitle={'Having fun'}
                    date={'16 October 2023'}
                    image={'/nav/logo.svg'}
                />

                <Blog_card
                    title={'CS induction night'}
                    subtitle={'Having fun'}
                    date={'16 October 2023'}
                    image={'/nav/logo.svg'}
                />
                 <Blog_card 
             title={'CS induction night'} 
             subtitle={'Having fun'} 
             date={'16 October 2023'} 
             image={'/nav/logo.svg'}             
             />
            </div>
        </div>
        </div>
    )
}

export default Blog