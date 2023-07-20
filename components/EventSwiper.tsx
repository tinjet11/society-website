"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import Events_card from './Events_card';
import { EventType } from '@/types';
import { useState, useEffect } from 'react';

interface Props {
    data: EventType[],
}


export default function EventSwiper({ data }: Props) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    //prevent hydration error
    if (!isMounted) {
        return null;
    }
    return (
        /*         <div>
                    <Swiper
                        spaceBetween={40}
                        slidesPerView={1}
                        pagination={{
                            dynamicBullets: true,
                        }}
                    
                        modules={[Pagination, Navigation]}
                        className="mySwiper mt-2">
        
                        {data && data.map((event) => (
                            <SwiperSlide key={event.id} className='w-auto h-full'>
                                <Events_card
                                    id={event.id}
                                    title={event.title}
                                    date={event.date}
                                    venue={event.venue}
                                    imageUrl={event.imageUrl}
                                    link={event.link}
                                /></SwiperSlide>
                        ))}
        
        
                    </Swiper>
        
                </div> */

        <>
            {data && data.map((event) => (

                <Events_card
                    id={event.id}
                    title={event.title}
                    date={event.date}
                    venue={event.venue}
                    imageUrl={event.imageUrl}
                    link={event.link}
                    key={event.id}
                />
            ))}

        </>
    )
}

