"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LinkPlaceholder from './ui/link-placeholder';
import SocialMedia from './ui/social-media';
import { usePathname } from 'next/navigation';
import { ToasterProvider } from '@/providers/toast-provider';
import EmailSubscriptionForm from '@/app/contact-us/components/subscription-form';

const Footer = () => {
    const pathname = usePathname();
    const useful_links = [
        {
            name:'Our Github',
            link: 'https://github.com/UoN-Computer-Science-Society'
        },
        {
            name: 'Read our Constitution',
            link: '/'
        },
        {
            name: 'Discord',
            link: 'https://discord.com/invite/SfyEyMcQrm'
        },
        {
            name: 'UNM Student Association',
            link: 'https://www.sanottingham.org/'
        },
        {
            name: 'University of Nottingham Malaysia',
            link: 'https://www.nottingham.edu.my'
        }
    ]

    return (
        <>
            {pathname != "/default" && (

                    <footer className="bg-[#4A4772] p-4 text-base text-[#E8E6E3]">

                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

                            <div className='flex flex-col gap-y-4 mt-3 md:basis-3/4'>

                                <div>
                                    <p className="mb-2">
                                        &copy; 2023 Computer Science Society, University of Nottingham Malaysia. All rights reserved.
                                    </p>
                                    <p>
                                        Website by <LinkPlaceholder url='https://github.com/tinjet11' text='Leong Tin Jet' />, and contributors.
                                        This website is powered by <LinkPlaceholder url='https://nextjs.org' text='Next.js' /> and open-source in our <LinkPlaceholder url={useful_links[0].link} text='Github Repository' />.
                                        Feel free to submit a pull request, or raise an issue if there are any problems.
                                    </p>
                                </div>

                                <Link href="/">
                                    <div className="flex items-center justify-start">
                                        <Image
                                            src="/CSS_dark.png"
                                            alt="CSS logo"
                                            width={200}
                                            height={200}
                                            className="object-contain"
                                        />
                                    </div>
                                </Link>

                                <p>UNM’s Computer Science Society is part of the <LinkPlaceholder url={useful_links[3].link} text='Student’s Association at University of Nottingham Malaysia' /></p>
                            </div>

                            <div className='flex-col mt-3 md:basis-1/4'>

                                <h3 className='text-xl font-bold mb-3'>Useful links</h3>

                                <ul className='list-disc pl-5'>
                                    {useful_links.map((item)=>(
                                        <li className='my-2'><LinkPlaceholder url={item.link} text={item.name} /></li>
                                    ))}
                                </ul>


                                <ToasterProvider />
                                <EmailSubscriptionForm />

                                <h3 className='text-xl font-bold my-3'>Talk with us</h3>
                                <div className="flex space-x-4 ">
                                    <SocialMedia />
                                </div>
                            </div>

                        </div>
                    </footer>

            )
            }
        </>
    );
};

export default Footer;
