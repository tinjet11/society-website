"use client"
import { Dialog } from '@headlessui/react'
import { X } from 'lucide-react'
import React, { useState } from 'react'
import GalleryPage from '../../../components/gallery';
import Balancer from 'react-wrap-balancer';
import { BlogType } from '@/types';
import format from 'date-fns/format'

interface Props {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void;
    data: BlogType,
}


const BlogDialog = ({ isOpen, setIsOpen,data }: Props) => {

    return (
        <>
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50 overflow-y-auto"
            >
                {/* The backdrop, rendered as a fixed sibling to the panel container */}
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                {/* Full-screen scrollable container */}
                <div className="fixed inset-0 overflow-y-auto">
                    {/* Container to center the panel */}
                    <div className="flex min-h-full items-center justify-center p-4">
                        {/* The actual dialog panel  */}
                        <Dialog.Panel className="text-black mx-auto max-w-2xl w-full h-full rounded bg-white p-6">
                            <div className='flex justify-between items-start'>

                                <button
                                    onClick={() => setIsOpen(false)}
                                >
                                    <X className="h-6 w-6 text-black" />
                                </button>
                            </div>

                            <GalleryPage imageData ={data.images} />

                            <Dialog.Title className='text-3xl font-bold mb-3 text-black'>{data.title}</Dialog.Title>
                            <p className='text-sm text-black mb-3'>{data.venue}</p>
                            <p className='text-sm text-black mb-3 '>Date: {new Date(data.date).toLocaleString()}</p>

                            <p className='text-base' dangerouslySetInnerHTML={{ __html: data.content }} />

                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>
        </>

    )
}

export default BlogDialog