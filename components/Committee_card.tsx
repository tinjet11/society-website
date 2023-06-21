import { committeeCardProps } from '@/types'
import React from 'react'
import { Icons } from './Icons'

const Committee_card = ({ title, image, name, email }: committeeCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-indigo-800 font-semibold mb-4 text-center">{title}</h2>

            <div className="rounded-full overflow-hidden w-24 h-24 mx-auto mb-4">
                <img src={image} alt="CommitteeImage" className="w-full h-full object-cover" />
            </div>

            <div>
                <p className="text-lg font-semibold p-2">{name}</p>
                <div className='flex flex-row gap-2 p-2'>
                    <div><Icons.mail/></div>
                    <div><p className="text-gray-600">{email}</p></div>
               
                </div>
             
            </div>
        </div>
    )
}

export default Committee_card