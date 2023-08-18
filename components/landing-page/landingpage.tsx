import React from 'react'
import PreviousEvent from '@/app/events/components/previous-event'
import UpcomingEvent from '@/app/events/components/upcoming-event'
import NoticeBoard from "@/components/landing-page/noticeboard";
import Intro from './intro';
import Happening from './happening';
import Partners from './partners';
import Image from 'next/image';

import EmailSubscriptionForm from "@/app/contact-us/components/subscription-form";
import { ToasterProvider } from "@/providers/toast-provider";
import LinkPlaceholder from '../ui/link-placeholder';
import SocialMedia from '../ui/social-media';
import Marquee from "react-fast-marquee";

const LandingPage = () => {
    return (

        <>
            <div className="container">
                <Marquee speed={30}>
                    <NoticeBoard />
                </Marquee>


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
                    <div className='px-6'>
                        <p className='title-header'>Who are <span className='title'>we</span></p>

                        <Intro />

                    </div>


                    <div className='px-6'>
                        <p className='title-header'>What's <span className='title'>happenning?</span></p>
                        <Happening />

                    </div>

                    <div className='px-6'>
                        <p className='title-header'>Our Upcoming <span className='title'>Events</span></p>

                        <UpcomingEvent />
                    </div>

                    <hr />

                    <div className='px-6 my-3'>
                        <p className='title-header'>Our <span className='title'>partners</span> and <span className='text-[#E981D9]'>Collaborators!</span></p>

                        <Partners />
                    </div>

                    <hr />


                    <div className='px-6'>
                        <p className='title-header'>See <span className='title'>More</span> of  <span className='text-[#E981D9]'>us!</span> </p>

                        <div className='flex md:flex-row flex-col gap-3'>
                            <div className='flex flex-col gap-y-4 md:basis-1/2'>
                                <div>
                                    <p>Get to know us better through our social media pages! We also regularly post and publish news
                                        about <LinkPlaceholder text='events' url='/events' /> and <LinkPlaceholder text='activities' url='/events' /> to let our members know what’s happening
                                        with the society!</p>
                                </div>

                                <div className='flex md:flex-row flex-col gap-3 md:justify-start'>

                                    <div className='flex flex-col gap-y-4'>
                                        <ToasterProvider />
                                        <EmailSubscriptionForm />

                                        <div className='flex flex-col'>
                                            <h2 className="text-xl font-bold mb-2">Social Media</h2>
                                            <div className="flex space-x-4">
                                                <SocialMedia />
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="md:basis-1/2 w-auto h-[400px]">

                                <Image
                                    src='/group_photo.jpg'
                                    alt="committee image"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                    }}
                                    width={400}
                                    height={400}
                                    className='self-center object-fill'
                                    loading='lazy'
                                />

                            </div>

                        </div>




                    </div>

                    <div className='px-6'>
                        <p className='title-header'>Latest <span className='title'>News</span></p>

                        <PreviousEvent />
                    </div>


                </div>

            </div>
        </>


    )
}

export default LandingPage