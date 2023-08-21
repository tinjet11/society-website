"use client"
import getEvents from '@/actions/getEvent';
import { Skeleton } from '@/components/ui/skeleton';
import { EventType } from '@/types';

import React, { useEffect, useState } from 'react'
import Events_card from './Events_card';
import { usePathname } from 'next/navigation';
import LinkPlaceholder from '@/components/ui/link-placeholder';

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
                        <React.Fragment key={event.id}>
                            <Events_card
                                id={event.id}
                                title={event.title}
                                description={event.description}
                                date={event.date}
                                venue={event.venue}
                                imageUrl={event.imageUrl}
                                link={event.link}
                            />
                        </React.Fragment>
                    ))}


                    {event.length === 0 && (
                        <div className='mt-3 mb-6'>
                            <p>No upcoming event available at this time.<br />
                                Follow us on <LinkPlaceholder text='social media' url='https://linktr.ee/unmcss' /> or subscribe to our newsletter for latest update!
                            </p>
                        </div>
                    )}
                </>
            }

        </>
    )
}

export default UpcomingEvent