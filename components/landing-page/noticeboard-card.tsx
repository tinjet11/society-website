import { NoticeBoardType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



interface NoticeBoardCardProps {
    data: NoticeBoardType
}
const NoticeBoardCard = ({ data }: NoticeBoardCardProps) => {
    return (
        <>
            <div className="w-full flex flex-col items-start sm:items-center my-20 p-2 px-8">
                <div className='mb-2'>
                    <h1 className="header">{data.title}</h1>
                </div>
                <div className='mt-2'>
                    <h1 className="sub-header">{data.description}</h1>
                </div>

                <div className="self-start sm:self-center mt-4">
                    <Link href={data.link}>
                        <button className="button">{data.buttonText}</button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default NoticeBoardCard