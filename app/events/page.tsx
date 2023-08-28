import React from 'react';
import UpcomingEvent from './components/upcoming-event';
import PreviousEvent from './components/previous-event';
import getEvents from '@/actions/getEvent';
import getBlogs from '@/actions/getBlogs';
import { Metadata } from 'next';



export const revalidate = 0
export const metadata: Metadata = {
  title: 'Event | UNM Computer Science Society',
  description: 'Explore event happening now and join us'
}

export default async function Home() {
  const event = await getEvents();
  const blog = await getBlogs();
  return (
    <>

      <div className='flex flex-col m-2 rounded-lg p-4'>

        <h1 className="text-center title-header" id='upcomingEvent'>Upcoming Events</h1>

        <UpcomingEvent data={event} />

        <h1 className="text-center title-header" id='previousEvent'>Previous Events</h1>

        <PreviousEvent data={blog} />

      </div>
    </>

  );
}

