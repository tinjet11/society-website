
import PreviousEvent from '@/app/events/components/previous-event'
import UpcomingEvent from '@/app/events/components/upcoming-event'
import React from 'react'
import { Facebook, Github, Instagram } from "lucide-react";
import Link from "next/link";


const LandingPage = () => {
    return (
        <div className="container">

            <div className="flex flex-col">

                <div className="w-full flex flex-col items-start my-20 p-2">
                    <div>
                        <h1 className="header">Unleash Your <span className='header-highlight'>Tech Passion</span>!</h1>
                    </div>
                    <div>
                        <h1 className="sub-header">Discover Cutting-Edge Events and Limitless Opportunities for Growth in <span className='header-highlight'>Computer Science Society   </span></h1>
                    </div>

                    <div className='self-start mt-4'>
                        <button className='button'>Discover Event</button>
                    </div>
                </div>

                <div className='px-3'>
                    <p className='title-header'>Upcoming Events</p>

                    <UpcomingEvent />
                </div>

                <div className='px-3'>
                    <p className='title-header'>Why Join Us</p>

                    <p className='text-lg text-gray-300 font-medium tracking-wide'>At University of Nottingham Malaysia Computer Science Society,  we strive to provide an
                        enriching experience for every tech enthusiast. By becoming a member, you gain access
                        to a plethora of exclusive benefits:</p>

                    <ul className='mt-4 p-3 text-base list-disc tracking-wide'>
                        <li className='mb-2'><span className='title font-semibold'>Skills Development: </span>
                            Participate in workshops, hackathons, and coding challenges to hone your technical skills and stay ahead in the rapidly evolving tech world.</li>
                        <li className='mb-2'><span className='title font-semibold'>Networking Opportunities: </span>
                            Connect with like-minded individuals, industry professionals, and guest speakers during our tech talks and networking events. Forge valuable connections that can shape your future career.</li>
                        <li className='mb-2'><span className='title font-semibold'>Leadership Roles: </span>
                            Develop leadership and organizational skills by taking up roles in event planning, marketing, or as part of the executive committee.</li>
                        <li className='mb-2'><span className='title font-semibold'>Community Engagements: </span>
                            Be part of a close-knit community passionate about technology, where you can exchange ideas, learn from others, and make lasting friendships.</li>
                    </ul>

                    <div className='bg-[#4A4772] text-center py-6 my-4'>
                        <h1 className='font-semibold text-lg'>"Ready to Take the First Step?<br />
                            Sign Up Now and Become Part of Our Tech Community!”</h1>
                        <button className='button mt-4'>Join Us</button>
                    </div>

                </div>

                <div className='px-3'>
                    <p className='title-header'>Previous Events</p>

                    <PreviousEvent />

                    <div className='bg-[#4A4772] text-center py-6 my-4'>
                        <h1 className='font-semibold text-lg'>Missed Our Previous Event? Don't Miss Out Again!<br />
                            Follow Us on Social Media now</h1>
                        <div className="flex space-x-4 justify-center mt-4">
                            <Link href="https://www.instagram.com/unm.css/" target="_blank" rel="noopener noreferrer">
                                <Instagram size={24} className="text-[#E981D9]" />
                            </Link>
                            <Link href="https://www.facebook.com/CSSocietyUNM" target="_blank" rel="noopener noreferrer">
                                <Facebook size={24} className="text-[#E981D9]" />
                            </Link>
                            <Link href="https://github.com/UoN-Computer-Science-Society" target="_blank" rel="noopener noreferrer">
                                <Github size={24} className="text-[#E981D9]" />
                            </Link>
                        </div>
                    </div>
                </div>




            </div>
        </div>

    )
}

export default LandingPage