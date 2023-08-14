import Link from 'next/link';
import React from 'react'


interface Props {
    url: string;
    text: string;
}
const LinkPlaceholder = ({ url, text }: Props) => {
    return (
        <>
            <Link href={url} className='underline font-bold' target='_blank'>{text}</Link>
        </>
    )
}

export default LinkPlaceholder