import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LinkPlaceholder from '../ui/link-placeholder'



const   Intro = () => {
    return (
        <div className='flex md:flex-row flex-col gap-3'>
            <div className='flex flex-col md:basis-1/2'>
                <div>
                    <p>Introducing <span className='font-bold text-lg'>UNM’s Computer Science Society</span>, also known as CSS. We’re a community of programmers 
                        and tech enthusiasts, at the <span className='font-bold text-lg'>University of Nottingham Malaysia</span>!
                         From script kiddies to Vim users and Linux rice makers, we’ve got a place for everyone. </p>
                </div>

                <div className='mt-3'>
                    <p>
                    Having members from different disciplines within the University, our workshops and events cater to 
                    different skill levels. Whether you're a seasoned coder or a tech newcomer, 
                    our activities are designed to resonate with everyone. 
                    Connect with us in <LinkPlaceholder url='https://www.instagram.com/unm.css/' text='our discord server'/>. 
                    </p>
                </div>

            </div>

            <div className='md:basis-1/2 flex justify-center'>
                <Image
                    src='/group_photo.jpg'
                    width={300}
                    height={300}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    alt="image"
                    className="object-contain"
                />
            </div>


            {/*         <p className='text-lg text-gray-300 font-medium tracking-wide'>At University of Nottingham Malaysia Computer Science Society,  we strive to provide an
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
 */}


            {/*     <div className='bg-[#4A4772] text-center py-6 my-4'>
                <h1 className='font-semibold text-lg'>"Ready to Take the First Step?<br />
                    Sign Up Now and Become Part of Our Tech Community!”</h1>
                <button className='button mt-4'>Join Us</button>
            </div> */}
        </div>
    )
}

export default Intro