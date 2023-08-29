import React from 'react'
import PreviousEvent from '@/app/events/components/previous-event'
import UpcomingEvent from '@/app/events/components/upcoming-event'
import NoticeBoard from "@/components/landing-page/noticeboard";
import Image from 'next/image';
import final_group_photo from '/public/images/web3_seats.jpg'

import EmailSubscriptionForm from "@/app/contact-us/components/subscription-form";
import { ToasterProvider } from "@/providers/toast-provider";
import Marquee from "react-fast-marquee";
import getPartners from '@/actions/getPartners';
import Intro from "@/components/landing-page/intro";
import Happening from "@/components/landing-page/happening";
import Partners from "@/components/landing-page/partners";
import LinkPlaceholder from "@/components/ui/link-placeholder";
import SocialMedia from "@/components/ui/social-media";
import getEvents from '@/actions/getEvent';
import getBlogs from '@/actions/getBlogs';
import Link from 'next/link';
import { Metadata } from 'next';
import Head from 'next/head';

export const revalidate = 0

export const metadata: Metadata = {
    title: 'Home | UNM Computer Science Society',
    description: 'Explore our latest events and announcements in our official website'
}

export default async function Home() {
    const partners = await getPartners();
    const event = await getEvents();
    const blogs = await getBlogs();
    return (

        <>
            <Marquee speed={30}>
                <NoticeBoard />
            </Marquee>


            <div className="flex flex-col">

                <div className="w-full flex flex-col items-start sm:items-center my-20 p-2 px-8">
                    <div className='mb-2'>
                        <h1 className="header">Building  <span className='header-highlight'>Bytes,</span> Creating <span className='text-[#E981D9]'>Bonds</span></h1>
                    </div>
                    <div className='max-w-[900px]'>
                        <h1 className="sub-header md:text-center text-left">A dynamic tech community, uniting minds that breathe innovation and code.
                            From beginners to experts, we journey together in exploring
                            the digital world. Based at the University of Nottingham Malaysia.</h1>
                    </div>

                    <div className='self-start sm:self-center mt-4 flex gap-x-8 gap-y-4 flex-col sm:flex-row'>
                        <Link href="/events" key="Event CTA"><button className='button' >Discover Events</button></Link>
                        <Link href="/contact-us" key="Collaborate CTA"><button className='button-secondary'>Collaborate with Us</button></Link>
                    </div>
                </div>

                <div className='px-6'>
                    <h1 className='title-header'>Who are <span className='title'>we</span></h1>

                    <Intro />

                </div>


                <div className='px-6'>
                    <h1 className='title-header'>What's <span className='title'>happening?</span></h1>
                    <Happening />

                </div>

                <div className='px-6'>
                    <h1 className='title-header'>Our Upcoming <span className='title'>Events</span></h1>

                    <UpcomingEvent data={event} />
                </div>


                <div className='px-6'>
                    <h1 className='title-header'>Our <span className='title'>partners</span> and <span className='text-[#E981D9]'>Collaborators!</span></h1>

                    <Partners data={partners} />
                </div>




                <div className='px-6'>
                    <p className='title-header'>See <span className='title'>More</span> of  <span className='text-[#E981D9]'>us!</span> </p>

                    <div className='flex md:flex-row flex-col gap-3'>
                        <div className='flex flex-col gap-y-4 md:basis-1/2'>
                            <div>
                                <p>Get to know us better through our social media pages! We also regularly post and publish news
                                    about <LinkPlaceholder text='events and activities' url='/events' target='_self' /> to let our members know what’s happening
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

                        {/*            <div className="md:basis-1/2 w-auto h-[400px]">

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

                            </div> */}


                        <div className='md:basis-1/2 flex justify-center'>
                            <Image
                                src={final_group_photo}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                                width={400}
                                height={400}
                                alt="Picture of participants in Intro to Web3"
                                className="object-contain"
                                placeholder='blur'
                                quality={60}
                            />
                        </div>


                    </div>




                </div>

                <div className='px-6'>
                    <p className='title-header'>Latest <span className='title'>News</span></p>

                    <PreviousEvent data={blogs} />
                </div>


            </div>


        </>

    );
}
