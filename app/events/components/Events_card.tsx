"use client"

import { EventDescriptionTitleType, EventType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import getEventDescriptionTitles from '@/actions/getEventsDescriptionTitle';
import { Dialog } from '@headlessui/react';
import EventDescriptionContentList from './Event-description-list';
import { X } from 'lucide-react';
import { Skeleton } from '../../../components/ui/skeleton';
import Button from '../../../components/ui/button';
import CountdownTimer from './countdown-timer';

const Events_card = ({ id, title, description, venue, date, imageUrl, link }: EventType) => {

    const [data, setData] = useState<EventDescriptionTitleType[]>([]);
    const [isMounted, setIsMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const malaysiaTimeZone = "Asia/Kuala_Lumpur";
    const formatteddate = new Date(date).toLocaleString("en-US", { timeZone: malaysiaTimeZone });

    useEffect(() => {
        setIsMounted(true);

        const fetchEventTitles = async () => {
            const titles = await getEventDescriptionTitles(id);
            setData(titles);
            setIsLoading(false);
        };

        fetchEventTitles();
    }, [id]);

    // Prevent hydration error
    if (!isMounted) {
        return null;
    }

    return (

        <div className='container flex flex-col' id={id}>

            <div className='flex flex-col lg:flex-row p-4 gap-8 justify-center items-center'>
                <div className='w-[250px] sm:w-[400px] h-full'>
                    <Image
                        width={400}
                        height={400}
                        src={imageUrl}
                        alt={'Events poster'}
                        className='object-fill'
                    />
                </div>




                <div className='flex flex-col justify-between p-2'>

                    <CountdownTimer date={formatteddate} />

                    <div className='items-start'>
                        <h1 className='title text-3xl font-bold mb-3'>{title}</h1>



                        <div className='mb-3'>

                            <div className=''>
                                <p className='text-base' dangerouslySetInnerHTML={{ __html: description }} />
                            </div>
                        </div>

                        <Dialog
                            open={isOpen}
                            onClose={() => setIsOpen(false)}
                            className="relative z-50"
                        >
                            {/* The backdrop, rendered as a fixed sibling to the panel container */}
                            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                            {/* Full-screen scrollable container */}
                            <div className="fixed inset-0 overflow-y-auto">
                                {/* Container to center the panel */}
                                <div className="flex min-h-full items-center justify-center p-4">
                                    {/* The actual dialog panel  */}
                                    <Dialog.Panel className="mx-auto max-w-lg w-full h-full rounded bg-white p-6">
                                        <div className='flex justify-between items-start'>
                                            <Dialog.Title className='text-3xl font-bold mb-3 text-black'>{title}</Dialog.Title>
                                            <button
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <X className="h-6 w-6 text-black" />
                                            </button>
                                        </div>

                                        <p className='text-sm text-black mb-3'>Venue: {venue}</p>
                                        <p className='text-sm text-black mb-3 '>Date: {formatteddate}</p>



                                        <hr className='my-2'></hr>
                                        {data
                                            .sort((a, b) => parseInt(a.order) - parseInt(b.order)) // Convert to numbers and sort
                                            .map((description, index) => (
                                                <div className='my-5' key={index}>

                                                    {isLoading ? (
                                                        <Skeleton className="w-auto h-[30px] aspect-square" />
                                                    ) :
                                                        <h1 className='text-lg font-bold text-black' key={description.id}>
                                                            {description.title}
                                                        </h1>
                                                    }



                                                    <EventDescriptionContentList key={description.eventId} eventId={description.eventId} eventdescriptionId={description.id} bg='white' />

                                                </div>
                                            ))}

                                        <div className='flex justify-end'>
                                            <Link
                                                href={link}>
                                                <Button text={'Join Now'}></Button>
                                            </Link>
                                        </div>


                                    </Dialog.Panel>
                                </div>
                            </div>
                        </Dialog>
                    </div>

                    <div className='flex flex-row justify-end mt-4 gap-4 mb-12 lg:mb-0'>
                        <div className='flex-col'>
                            {/*   <p className='my-3'><Balancer>Wanna know more about the workshop?</Balancer></p> */}
                            <button onClick={() => setIsOpen(true)} className='button'>
                                More Info
                            </button>
                        </div>
                        <div className='flex-col'>
                            {/* <p className='my-3'><Balancer>Wanna register and join us?</Balancer></p> */}
                            <Link
                                href={link}>
                                <button className='bg-[#5FD88C] hover:bg-[#40cc73] text-white font-bold py-2 px-4 rounded h-full'>Join Now</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Events_card;
