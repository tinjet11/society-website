"use client"

import Image from 'next/image'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from 'swiper';
import Events_card from './Events_card';

const Events = () => {
    return (
        <div className='container'>
            <div className='flex flex-col m-2 bg-white rounded-lg shadow-lg p-4'>
                <h1 className="text-center font-bold text-4xl mb-3">Events</h1>
                <hr/>
            
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-2">
                    <SwiperSlide><Events_card/></SwiperSlide>
                    <SwiperSlide><Events_card/></SwiperSlide>
                    <SwiperSlide><Events_card/></SwiperSlide>
                </Swiper>
                
            </div>
 
        </div>
    )
}

export default Events