import Link from 'next/link';
import React from 'react'

interface Props {
    url: string;
    text: string
    target?: string
}
const LinkPlaceholder = ({ url, text, target="_blank"}: Props) => {
    return (
        <>
            <Link href={url} className='underline font-bold' target={target}>{text}</Link>
        </>
    )
}

export default LinkPlaceholder