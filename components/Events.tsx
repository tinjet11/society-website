"use client"

import Image from 'next/image'

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EventType } from '@/types';
import EventSwiper from './EventSwiper';
import getEvents from '@/actions/getEvent';
import { useState, useEffect } from 'react';
import { Skeleton } from './ui/skeleton';
import { Balancer } from 'react-wrap-balancer';

export const revalidate = 0;

const Events = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [event, setEvent] = useState<EventType[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const fetchEvents = async () => {
            setIsLoading(true);
            const events = await getEvents();
            setEvent(events);
            setIsLoading(false);
        };

        fetchEvents();
    }, []);


    useEffect(() => {
        setIsMounted(true);
    }, []);

    //prevent hydration error
    if (!isMounted) {
        return null;
    }


    return (
      
            <div className='flex flex-col m-2 rounded-lg p-4'>
                {/*                 <div className='flex flex-row justify-between m-2 p-2'>

                    <div className='flex flex-col basis-1/2 justify-center'>
                        <h1 className="font-bold text-4xl mb-3">Events</h1>
                        <h1 className="font-semibold mb-3">
                            <Balancer>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                                aut odit aut fugit, sed quia consequuntur ma
                            </Balancer>
                        </h1>
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
 */}

                <h1 className="font-bold text-2xl sm:text-4xl mb-3">Upcoming Events</h1>

                {isLoading ? (
                    <Skeleton className="w-full h-[500px] aspect-square" />
                ) : (
                    <EventSwiper data={event} />
                )}
            </div>

 
    )
}

export default Events