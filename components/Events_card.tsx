"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Events_card = () => {
    const [partyTime, setPartyTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const target = new Date("12/31/2023 23:59:59");

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

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='flex flex-col'>

                <div className="flex justify-center items-center my-4">
                    <div className="flex items-center">
                        <span className="text-4xl font-bold">{days}</span>
                        <span className="text-gray-500 ml-1">Days</span>
                    </div>
                    <span className="mx-2 text-gray-500">:</span>
                    <div className="flex items-center">
                        <span className="text-4xl font-bold">{hours}</span>
                        <span className="text-gray-500 ml-1">Hours</span>
                    </div>
                    <span className="mx-2 text-gray-500">:</span>
                    <div className="flex items-center">
                        <span className="text-4xl font-bold">{minutes}</span>
                        <span className="text-gray-500 ml-1">Minutes</span>
                    </div>
                    <span className="mx-2 text-gray-500">:</span>
                    <div className="flex items-center">
                        <span className="text-4xl font-bold">{seconds}</span>
                        <span className="text-gray-500 ml-1">Seconds</span>
                    </div>
                </div>


                <div className='flex flex-row p-4 justify-evenly'>
                    <div className='w-1/2'>
                        <Image
                            width={500}
                            height={200}
                            src={'/bitcoin.svg'}
                            alt={'Events poster'}
                            className='object-contain'
                        />
                    </div>

                    <div className='flex flex-col justify-between p-2'>
                        <div className='items-center'>
                            <h1 className='text-lg font-bold mb-3'>Introduction to WEB3</h1>

                            <div className='mb-3'>
                                <h1 className='text-lg font-bold'>Venue:</h1>
                                <p className='text-base'>F1A11</p>
                            </div>

                            <div className='mb-3'>
                                <h1 className='text-lg font-bold'>Date & Time:</h1>
                                <p className='text-base'>8th March 2023, 6pm-8pm</p>
                            </div>
                            <div className='mb-3'>
                                <h1 className='text-lg font-bold mb-3'>Sessions:</h1>
                                <ul className='list-disc ml-6'>
                                    <li>Getting to know Web3</li>
                                    <li>Introduction to blockchain</li>
                                    <li>Doing live transactions</li>
                                </ul>
                            </div>


                            <h1 className='text-lg font-bold'>Join us for</h1>
                            <ul className='list-disc ml-6'>
                                <li>Free pizza</li>
                                <li>2 scpd points</li>
                            </ul>

                        </div>

                        <div className='self-end'>
                            <button className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded'>
                                Join Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Events_card;
