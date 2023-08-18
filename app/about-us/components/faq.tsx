"use client"
import React, { useState } from 'react'
import Faq_card from './faq_card';

const qna = [
    {
        question: 'How long do the member registration open',
        answer: 'The member registration is open throughout the year',
        open: true,
    },
    {
        question: 'How much is the registration fee',
        answer: 'The member registration fee is RM 15',
    }
]

const Faq = () => {
    return (
        <>
            {qna.map((item, key) => (
                <Faq_card key={key} question={item.question} answer={item.answer} open={item.open} />
            ))}

        </>
    )
}

export default Faq