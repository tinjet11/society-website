"use client"
import getEvents from '@/actions/getEvent';
import { Skeleton } from '@/components/ui/skeleton';
import { EventType } from '@/types';

import React, { useEffect, useState } from 'react'
import Events_card from './Events_card';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const UpcomingEvent = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [event, setEvent] = useState<EventType[]>([])
    const [isMounted, setIsMounted] = useState(false);

    const pathname = usePathname();

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
        <>
            {isLoading ? (
                <Skeleton className="w-full h-[500px] mt-4 aspect-square" />
            ) :
                <>
                    {event && event.map((event) => (
                        <Events_card
                            id={event.id}
                            title={event.title}
                            description={event.description}
                            date={event.date}
                            venue={event.venue}
                            imageUrl={event.imageUrl}
                            link={event.link}
                        />
                    ))}

                    {event.length === 0 && pathname === '/events' && (
                        <div className='mx-auto card-bg rounded-lg shadow-2xl p-8 flex flex-col'>
                            <p>No event available this time.<br></br>
                                Follow our social media or subscribe to our newsletter for latest update
                            </p>
                            <Link
                                href='/contact-us'
                                className='self-end'>
                                <button className='button mt-3 items-end'>Get latest information</button>
                            </Link>
                        </div>
                    )}
                </>
            }

        </>
    )
}

export default UpcomingEvent