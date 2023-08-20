import React from 'react'
import Faq_card from './faq_card';
import { FaqType } from '@/types';

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
interface Props {
    data: FaqType[];
}

const Faq = ({ data }: Props) => {
    return (
        <React.Fragment>
            {data.length === 0 && <p>Faq not found</p>}
            {data && data.map((item, key) => (
                <Faq_card key={key} question={item.question} answer={item.answer} />
            ))}

        </React.Fragment>
    )
}

export default Faq