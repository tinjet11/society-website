import { Facebook, Github, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Balancer } from 'react-wrap-balancer';

const Footer = () => {
    return (
        <footer className="container block lg:hidden mt-10 border-t ">
            <div className="py-10 flex flex-col md:flex-row gap-8 md:gap-16">

                <div className='flex flex-col gap-y-4 mt-3'>
                    <Link href="/">
                        <Image
                            src="/nav/logo.svg"
                            alt="CSS logo"
                            width={50}
                            height={50}
                            className="object-contain items-center flex justify-center"
                        />
                    </Link>
                    <div>
                        <p className="text-lg font-bold"><Balancer>University of Nottingham Malaysia</Balancer></p>
                        <p className="text-md font-semibold"><Balancer>Computer Science Society</Balancer></p>
                    </div>


                    <div className="flex flex-col gap-2">
                        <h3 className='text-base font-normal underline'>Follow Us On</h3>
                        <div className='flex gap-4 items-center'>
                            <Link href="https://www.instagram.com/unm.css/" target="_blank" rel="noopener noreferrer">
                                <Instagram size={24} className="text-indigo-500" />
                            </Link>
                            <Link href="https://www.facebook.com/CSSocietyUNM" target="_blank" rel="noopener noreferrer">
                                <Facebook size={24} className="text-indigo-500" />
                            </Link>
                            <Link href="https://github.com/UoN-Computer-Science-Society" target="_blank" rel="noopener noreferrer">
                                <Github size={24} className="text-indigo-500" />
                            </Link>
                        </div>
                    </div>

                </div>

                <div className='flex-col mt-3'>
                    <h3 className='text-base font-normal underline mb-3'>Quick link</h3>
                    <div className='flex gap-x-5 md:gap-x-10'>
                        <div className="flex flex-col font-semibold gap-3">
                            <Link href="/">
                                <span>Home</span>
                            </Link>
                            <Link href="/about-us">
                                <span>About Us</span>
                            </Link>
                            <Link href="/events">
                                <span>Events</span>
                            </Link>

                            <Link href="/blog">
                                <span>Blog</span>
                            </Link>
                        </div>

                        <div className="flex flex-col font-semibold gap-3">

                            <Link href="/resources">
                                <span>Resources</span>
                            </Link>
                            <Link href="/contact-us">
                                <span>Contact Us</span>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>

            <div>
                <div className="mx-auto py-8">
                    <p className="text-center text-xs">
                        &copy; 2023 Computer Science Society, University of Nottingham Malaysia. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

