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
import Balancer from 'react-wrap-balancer';

const Events_card = ({ id, title, description, venue, date, imageUrl, link }: EventType) => {


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

        setIsSmallScreen(false)

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

        <div className='container flex flex-col' key={id} id={id}>

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

                <div className="flex flex-row justify-center w-auto p-4 items-center mt-8 mb-4 rounded-2xl border countdown-small">
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


                <div className='flex flex-col justify-between p-2 mt-4'>
                    <div className='items-start'>
                        {isLoading ? (
                            <Skeleton className="w-[300px] h-[30px] aspect-square" />
                        ) :
                            <h1 className='title text-3xl font-bold mb-3'>{title}</h1>
                        }


                        <div className='mb-3'>

                            {isLoading ? (
                                <Skeleton className="w-[300px] h-[30px] aspect-square" />
                            ) :
                                <div className=''>
                                    <p className='text-base' dangerouslySetInnerHTML={{ __html: description }} />
                                </div>

                            }
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
                                            .map((description) => (
                                                <div className='my-5'>

                                                    {isLoading ? (
                                                        <Skeleton className="w-auto h-[30px] aspect-square" />
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

                    <div className="flex flex-row justify-center w-auto p-4 items-center mt-8 mb-4 rounded-2xl border countdown-big">
                        <div className="flex items-center">
                            <span className="text-2xl md:text-3xl font-bold">{days}</span>
                            <span className="card-subtitle ml-1">
                                {`Days`}
                            </span>
                        </div>
                        <span className="mx-1 md:mx-2 card-subtitle">:</span>
                        <div className="flex items-center">
                            <span className="text-2xl md:text-3xl font-bold">{hours}</span>
                            <span className="card-subtitle ml-1">
                                {`Hours`}
                            </span>
                        </div>
                        <span className="mx-1 md:mx-2 card-subtitle">:</span>
                        <div className="flex items-center">
                            <span className="text-2xl md:text-3xl font-bold">{minutes}</span>
                            <span className="card-subtitle ml-1">
                                {`Minutes`}
                            </span>
                        </div>
                        <span className="mx-1 md:mx-2 card-subtitle">:</span>
                        <div className="flex items-center">
                            <span className="text-2xl md:text-3xl font-bold">{seconds}</span>
                            <span className="card-subtitle ml-1">
                                {`Seconds`}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Events_card;
