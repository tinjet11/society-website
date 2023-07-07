"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from 'swiper';
import Events_card from './Events_card';

const Events = () => {

    const [slide, setSlide] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth > 1140) {
                setSlide(2);
            } else {
                setSlide(1);
            }
        };

        handleResize(); // Set initial slide value

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='container'>
            <div className='flex flex-col m-2 primary-bg-colorrounded-lg shadow-lg p-4'>
                <div className='flex flex-row justify-between m-2 p-2'>

                    <div className='flex flex-col basis-1/2 justify-center'>
                        <h1 className="font-bold text-4xl mb-3">Events</h1>
                        <h1 className="font-semibold mb-3">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma</h1>
                    </div>

                    <div className='flex justify-center basis-1/2 '>
                        <Image
                            src={'/calendar.svg'}
                            alt={'calendar'}
                            width={300}
                            height={300}
                            className='object-contain' />
                    </div>

                </div>


                <h1 className="font-bold text-center text-2xl sm:text-4xl mb-3">Events Showcase</h1>
                <Swiper
                    spaceBetween={40}
                    slidesPerView={slide}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper mt-2">
                    <SwiperSlide><Events_card /></SwiperSlide>
                    <SwiperSlide><Events_card /></SwiperSlide>
                    <SwiperSlide><Events_card /></SwiperSlide>
                </Swiper>

            </div>

        </div>
    )
}

export default Events