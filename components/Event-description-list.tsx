"use client"

import getEventDescriptionContents from "@/actions/getEventsDescriptionContent";
import { EventDescriptionContentType } from "@/types";
import { useState, useEffect } from "react";
import { Skeleton } from '@/components/ui/skeleton';

interface EventDescriptionContentListProps {
    eventId: string,
    eventdescriptionId: string
    bg: string
}



const EventDescriptionContentList = ({ eventId, eventdescriptionId, bg }: EventDescriptionContentListProps) => {

    const [data, setData] = useState<EventDescriptionContentType[]>([]);
    const [isMounted, setIsMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsMounted(true);

        const fetchEventContents = async () => {
            setIsLoading(true);
            const contents = await getEventDescriptionContents(eventId, eventdescriptionId);
            setIsLoading(false);
            setData(contents);
        };

        fetchEventContents();
    }, []);

    // Prevent hydration error
    if (!isMounted) {
        return null;
    }

    return (
        <>
            <>
                {isLoading ? (
                    <>
                        <Skeleton className={`w-[200px] h-[20px] my-2 aspect-square ${bg == "white" ? 'bg-gray-900 opacity-10' : ''
                            }`} />
                        <Skeleton className={`w-[200px] h-[20px] my-2 aspect-square ${bg == "white" ? 'bg-gray-900 opacity-10' : ''
                            }`} />
                        <Skeleton className={`w-[200px] h-[20px] my-2 aspect-square ${bg == "white" ? 'bg-gray-900 opacity-10' : ''
                            }`} />
                    </>
                ) :
                    <ul className={`list-disc ml-6 ${bg == "white" ? 'text-black' : ''}`}>
                        {
                            data
                                .sort((a, b) => parseInt(a.order) - parseInt(b.order)) // Convert to numbers and sort
                                .map((content) => (

                                    <li key={content.id}>{content.description}</li>

                                ))}
                    </ul>
                }
            </>
        </>
    )
}

export default EventDescriptionContentList