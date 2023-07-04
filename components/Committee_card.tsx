import { committeeCardProps } from '@/types'
import React from 'react'
import { Icons } from './Icons'
import Link from 'next/link'
import Image from 'next/image'
Image

const Committee_card = ({ title, image, name,study_year, email }: committeeCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-indigo-800 font-semibold mb-4 text-center">{title}</h2>

            <div className="rounded-full overflow-hidden w-24 h-24 mx-auto mb-4">
                <Image 
                width={30}
                height = {30}
                src={image} 
                alt="CommitteeImage" 
                className="w-full h-full object-cover" />
            </div>

            <div>
                <p className="text-lg font-semibold p-2">{name}</p>
                <p className="text-md p-2 ">{study_year}</p>
                <div className='flex flex-row gap-2 p-2 overflow-auto'>
                    <div><Icons.mail/></div>
                    <div>
                    <Link className="text-gray-600 underline" href={`mailto:${email}`}>{email}</Link>
                    </div>
                </div>
             
            </div>
        </div>
    )
}

export default Committee_card