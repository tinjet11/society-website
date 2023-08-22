"use client"
import React, { useEffect, useState } from 'react';
import UpcomingEvent from './components/upcoming-event';
import PreviousEvent from './components/previous-event';
import getEvents from '@/actions/getEvent';
import getBlogs from '@/actions/getBlogs';
import { BlogType, EventType } from '@/types';
import Loading from '../loading';

export default async function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const [event, setEvent] = useState<EventType[]>([])
  const [blog, setBlog] = useState<BlogType[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      const events = await getEvents();
      const blogs = await getBlogs();
      setBlog(blogs)

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
      {isLoading ? (<Loading />) : (<div className='flex flex-col m-2 rounded-lg p-4'>

        <h1 className="text-center title-header" id='upcomingEvent'>Upcoming Events</h1>

        <UpcomingEvent data={event} />

        <h1 className="text-center title-header" id='previousEvent'>Previous Events</h1>

        <PreviousEvent data={blog} />

      </div>)}

    </>

  );
}

