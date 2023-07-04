"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Events_card = () => {
    const [partyTime, setPartyTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

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
    



    return (
        <div className='flex flex-col shadow-lg'>

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
                <div className='w-full md:w-1/2'>
                    <Image
                        width={500}
                        height={200}
                        src={'/bitcoin.svg'}
                        alt={'Events poster'}
                        className='object-contain'
                    />
                </div>

                <div className='flex flex-col justify-between p-2 mt-4 md:mt-0'>
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

                    <div className='self-end mt-4'>
                        <button className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded'>
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events_card;
