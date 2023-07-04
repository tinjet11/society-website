import Image from 'next/image'
import React from 'react'
import Events from './Events'
import Blog from './Blog'
import Blog_card from './Blog_card'
import Button from './Button'

const Hero = () => {
    return (
        <div className="container">
            <div className="w-full m-2 p-2 flex flex-col gap-4 items-center my-20">
                <div>
                    <h1 className="font-bold text-4xl mb-3 w-full text-center">University of Nottingham Malaysia</h1>
                </div>
                <div>
                    <h1 className="font-bold text-4xl mb-3 w-full text-center">Computer Science Society</h1>
                </div>
                <div className="flex flex-row gap-4">
                    <div>
                    <Button
                   text='About Us'
                   path='/about-us'
                   />
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row my-8">
                    <div className="shape-container self-start">
                        <div className="shape-left">
                            <h1 className="text-overlay">Our Mission</h1>
                        </div>
                    </div>
                    <div className='flex justify-center basis-1/2 '>
                        <Image
                            src={'/mission.svg'}
                            alt={'mission'}
                            width={300}
                            height={300}
                            className='object-contain' />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-start sm:justify-between">
                    <div className="flex justify-start my-8">
                        <div className="max-w-lg">
                            <h2 className="text-2xl font-bold mb-4">What We Aim to Achieve</h2>
                            <p className="text-lg text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae ullamcorper lorem. Proin vitae urna eget mi
                                feugiat interdum. Maecenas varius tellus sit amet sem imperdiet, in rhoncus mi suscipit. Integer id purus sed
                                purus porttitor fringilla.
                            </p>
                            <p className="text-lg text-gray-600 mt-4">
                                Sed vel iaculis odio. Suspendisse luctus velit auctor ex feugiat, at condimentum urna dictum. Nullam et mi at
                                est maximus efficitur at vitae neque. Aliquam vitae quam consectetur, finibus tortor nec, elementum nisi.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-end my-8 text-end">
                        <div className="max-w-lg">
                            <h2 className="text-2xl font-bold mb-4">What We Aim to Build</h2>
                            <p className="text-lg text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae ullamcorper lorem. Proin vitae urna eget mi
                                feugiat interdum. Maecenas varius tellus sit amet sem imperdiet, in rhoncus mi suscipit. Integer id purus sed
                                purus porttitor fringilla.
                            </p>
                            <p className="text-lg text-gray-600 mt-4">
                                Sed vel iaculis odio. Suspendisse luctus velit auctor ex feugiat, at condimentum urna dictum. Nullam et mi at
                                est maximus efficitur at vitae neque. Aliquam vitae quam consectetur, finibus tortor nec, elementum nisi.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-4 my-8 justify-center">
                    <div className="text-center bg-indigo-200 text-gray-800 p-4 rounded">
                        Love our mission? Become a part of our committee or join as a member!
                    </div>
                   <Button
                   text='Join Us'
                   path='/about-us'
                   />
                </div>

                <div className="flex flex-row my-8 ">
                    <div className='flex justify-center basis-1/2 '>
                        <Image
                            src={'/previous.svg'}
                            alt={'previous'}
                            width={300}
                            height={300}
                            className='object-contain' />
                    </div>
                    <div className="shape-container self-end">
                        <div className="shape-right">
                            <h1 className="text-overlay">Previous Events</h1>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 mt-10">
                    <div className="bg-gray-100 rounded-lg shadow-lg p-6 hover:bg-indigo-100 flex flex-col">
                        <Blog_card
                            title="Sample Blog Title"
                            subtitle="Sample Blog Subtitle"
                            date="June 1, 2023"
                            image='/bitcoin.svg'
                            btn_txt='See More'
                        />
                    </div>

                    <div className="bg-gray-100 rounded-lg shadow-lg p-6 hover:bg-indigo-100 flex flex-col">
                        <Blog_card
                            title="Sample Blog Title"
                            subtitle="Sample Blog Subtitle"
                            date="June 1, 2023"
                            image='/bitcoin.svg'
                            btn_txt='See More'
                        />
                    </div>
                    <div className="bg-gray-100 rounded-lg shadow-lg p-6 hover:bg-indigo-100 flex flex-col">
                        <Blog_card
                            title="Sample Blog Title"
                            subtitle="Sample Blog Subtitle"
                            date="June 1, 2023"
                            image='/bitcoin.svg'
                            btn_txt='See More'
                        />
                    </div>
                </div>
                <div className="flex flex-row gap-4 my-8 justify-center">
                    <div className="text-center bg-indigo-200 text-gray-800 p-4 rounded">
                        Missed out on joining last year? Discover our latest event now!
                    </div>
                    <Button
                   text='Explore Events'
                   path='/events'
                   />
                </div>



                <div className="flex flex-row my-8">
                    <div className="shape-container self-end">
                        <div className="shape-left">
                            <h1 className="text-overlay">Why Join Us</h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center basis-1/2">
                        <Image
                            src={'/joinus.svg'}
                            alt={'hand'}
                            width={300}
                            height={300}
                            className="object-contain"
                        />
                    </div>
                </div>

                <div >
                    <h2 className="text-xl font-bold mb-2">Benefits of Joining:</h2>
                    <ul className="list-disc pl-4 mb-4">
                        <li>Opportunity to network with industry professionals</li>
                        <li>Access to exclusive workshops and events</li>
                        <li>Collaborative projects and learning opportunities</li>
                        <li>Career guidance and support</li>
                    </ul>
                    <a href="#" className="text-indigo-500 hover:text-indigo-600">Learn more</a>
                </div>


            </div>
        </div>

    )
}

export default Hero