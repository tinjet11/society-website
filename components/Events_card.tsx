"use client"

import { EventDescriptionTitleType, EventType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import getEventDescriptionTitles from '@/actions/getEventsDescriptionTitle';
import { Dialog } from '@headlessui/react';
import EventDescriptionContentList from './Event-description-list';
import { X } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

const Events_card = ({ id, title, venue, date, imageUrl, link }: EventType) => {


    const [partyTime, setPartyTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const malaysiaTimeZone = "Asia/Kuala_Lumpur";
    const formatteddate = new Date(date).toLocaleString("en-US", { timeZone: malaysiaTimeZone });

    useEffect(() => {
        const target = new Date(formatteddate);

        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHours(h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);

            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
                setPartyTime(true);
            }
        }, 1000);



        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        const updateWindowDimensions = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        updateWindowDimensions(); // Set initial value

        window.addEventListener("resize", updateWindowDimensions);

        return () => {
            window.removeEventListener("resize", updateWindowDimensions);
        };
    }, []);



    const [data, setData] = useState<EventDescriptionTitleType[]>([]);

    const [isOpen, setIsOpen] = useState(false)
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

        <div className='flex flex-col h-full'>
            <div className="flex justify-center items-center my-4">
                <div className="flex items-center">
                    <span className="text-2xl md:text-3xl font-bold">{days}</span>
                    <span className="card-subtitle ml-1">
                        {isSmallScreen ? `D` : `Days`}
                    </span>
                </div>
                <span className="mx-1 md:mx-2 card-subtitle">:</span>
                <div className="flex items-center">
                    <span className="text-2xl md:text-3xl font-bold">{hours}</span>
                    <span className="card-subtitle ml-1">
                        {isSmallScreen ? `H` : `Hours`}
                    </span>
                </div>
                <span className="mx-1 md:mx-2 card-subtitle">:</span>
                <div className="flex items-center">
                    <span className="text-2xl md:text-3xl font-bold">{minutes}</span>
                    <span className="card-subtitle ml-1">
                        {isSmallScreen ? `M` : `Minutes`}
                    </span>
                </div>
                <span className="mx-1 md:mx-2 card-subtitle">:</span>
                <div className="flex items-center">
                    <span className="text-2xl md:text-3xl font-bold">{seconds}</span>
                    <span className="card-subtitle ml-1">
                        {isSmallScreen ? `S` : `Seconds`}
                    </span>
                </div>
            </div>

            <div className='flex flex-col md:flex-row p-4 justify-evenly'>
                <div className='w-full h-full md:w-1/2'>
                    <Image
                        width={500}
                        height={200}
                        src={imageUrl}
                        alt={'Events poster'}
                        className='object-contain'
                    />
                </div>

                <div className='flex flex-col justify-between p-2 mt-4 md:mt-0'>
                    <div className='items-center'>
                        {isLoading ? (
                            <Skeleton className="w-[300px] h-[30px] aspect-square" />
                        ) :
                            <h1 className='text-3xl font-bold mb-3'>{title}</h1>
                        }

                        <div className='mb-3'>
                            <h1 className='text-lg font-bold'>Venue:</h1>
                            {isLoading ? (
                                <Skeleton className="w-[300px] h-[30px] aspect-square" />
                            ) :
                                <p className='text-base'>{venue}</p>
                            }
                        </div>

                        <div className='mb-3'>
                            <h1 className='text-lg font-bold'>Date & Time:</h1>
                            {isLoading ? (
                                <Skeleton className="w-[300px] h-[30px] aspect-square" />
                            ) :
                                <p className='text-base'>{formatteddate}</p>
                            }
                        </div>

                        {data
                            .sort((a, b) => parseInt(a.order) - parseInt(b.order)) // Convert to numbers and sort
                            .map((description) => (
                                <div className='my-5'>

                                    {isLoading ? (
                                        <Skeleton className="w-[300px] h-[30px] aspect-square" />
                                    ) :
                                        <h1 className='text-lg font-bold' key={description.id}>
                                            {description.title}
                                        </h1>
                                    }



                                    <EventDescriptionContentList eventId={description.eventId} eventdescriptionId={description.id} bg='' />

                                </div>
                            ))}



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
                                            .map((description) => (
                                                <div className='my-5'>

                                                    {isLoading ? (
                                                        <Skeleton className="w-[300px] h-[30px] aspect-square" />
                                                    ) :
                                                        <h1 className='text-lg font-bold text-black' key={description.id}>
                                                            {description.title}
                                                        </h1>
                                                    }



                                                    <EventDescriptionContentList eventId={description.eventId} eventdescriptionId={description.id} bg='white' />

                                                </div>
                                            ))}

                                        <div className='flex justify-end'>
                                            <Link
                                                href={link}>
                                                <button className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded'>
                                                    Join Now
                                                </button></Link>
                                        </div>


                                    </Dialog.Panel>
                                </div>
                            </div>
                        </Dialog>
                    </div>

                    <div className='flex self-end mt-4 gap-4 items-center'>
                        <button onClick={() => setIsOpen(true)} className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded'>
                            More Info
                        </button>
                        <Link
                            href={link}>
                            <button className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded'>
                                Join Now
                            </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events_card;
