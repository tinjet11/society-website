"use client"
import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react'

interface Props {
    key: number,
    question: string,
    answer: string,
    open?: boolean,
}

const Faq_card = ({ key,question, answer, open }: Props) => {
    const [isOpen, setIsOpen] = useState(open || false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='m-4 flex-col border-t border-gray-500'>

            <div className={`p-4 flex justify-between cursor-pointer ${isOpen ? 'bg-gray-500' : ''}`} onClick={toggle}>
                <dd className='text-lg font-bold'>
                     {question}
                </dd>

                {isOpen ? <Minus className='w-6 h-6 mr-4' /> : <Plus className='w-4 h-6 mr-4' />}
            </div>


            {isOpen && (
                <div className='mt-2 p-4'>
                    <dt className='font-light title'>
                    {answer}
                    </dt>

                </div>

            )}
        </div>
    )
}

export default Faq_card
