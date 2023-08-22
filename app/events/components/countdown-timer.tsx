"use client"
import React, { useEffect, useState } from 'react';
const CountdownTimer = ({ date }: { date: string }) => {

    const [partyTime, setPartyTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const target = new Date(date);

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

    return (
        <>
            {partyTime ?
                (<p>This event has ended</p>)
                : (
                    <div className="flex flex-row justify-center w-auto p-4 items-center mb-4 rounded-2xl border countdown-small">
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
                )
            }

        </>
    )
}

export default CountdownTimer