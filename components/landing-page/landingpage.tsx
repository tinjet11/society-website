import React from 'react'
import PreviousEvent from '@/app/events/components/previous-event'
import UpcomingEvent from '@/app/events/components/upcoming-event'
import NoticeBoard from "@/components/landing-page/noticeboard";
import Intro from './intro';
import Happening from './happening';
import Partners from './partners';

const LandingPage = () => {
    return (

        <>
            <div className="container">

                <div className="flex flex-col">

                    <div className="w-full flex flex-col items-start sm:items-center my-20 p-2 px-8">
                        <div className='mb-2'>
                            <h1 className="header">Building  <span className='header-highlight'>Bytes,</span> Creating <span className='text-[#E981D9]'>Bonds</span></h1>
                        </div>
                        <div className='max-w-[900px]'>
                            <h1 className="sub-header sm:text-center text-left">A dynamic tech community, uniting minds that breathe innovation and code.
                                From beginners to experts, we journey together in exploring
                                the digital world. Based at the University of Nottingham Malaysia.</h1>
                        </div>

                        <div className='self-start sm:self-center mt-4 flex gap-x-8 gap-y-4 flex-col sm:flex-row'>
                            <button className='button'>Discover Event</button>
                            <button className='button'>Collaborate with Us</button>
                        </div>
                    </div>
                    {/* 
                <NoticeBoard />

 */}
                    <div className='px-3'>
                        <p className='title-header'>Who are <span className='title'>we</span></p>

                        <Intro />

                    </div>


                    <div className='px-3'>
                        <p className='title-header'>What's <span className='title'>happenning?</span></p>
                        <Happening />

                    </div>

                    <div className='px-3'>
                        <p className='title-header'>Our Upcoming <span className='title'>Events</span></p>

                        <UpcomingEvent />
                    </div>

                    <hr/>

                    <div className='p-3 my-3'>
                        <p className='title-header text-center'>Our <span className='title'>partners</span> and <span className='text-[#E981D9]'>Collaborators!</span></p>

                        <Partners />
                    </div>

                    <hr/>


                    <div className='px-3'>
                        <p className='title-header'>Previous Events</p>

                        <PreviousEvent />

                    </div>


                </div>

            </div>
        </>


    )
}

export default LandingPage