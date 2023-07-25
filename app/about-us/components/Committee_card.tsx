import { committeeCardProps } from '@/types'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Balancer } from 'react-wrap-balancer'
import { Mail } from 'lucide-react'
Image

const Committee_card = ({ title, image, name, study_year, email }: committeeCardProps) => {
    return (
        <div className="rounded-2xl shadow-2xl p-4">
            <h2 className="title font-semibold mb-4 text-center">{title}</h2>

            <div className="rounded-full overflow-hidden w-24 h-24 mx-auto mb-4">
                <Image
                    width={30}
                    height={30}
                    src={image}
                    alt="CommitteeImage"
                    className="w-full h-full object-cover" />
            </div>

            <div>
                <p className="text-lg font-semibold p-2 card-title"><Balancer>{name}</Balancer></p>
                <p className="text-md p-2 card-subtitle "><Balancer>{study_year}</Balancer></p>
                <div className='flex flex-row gap-2 p-2 overflow-auto'>
                    <div><Mail /></div>
                    <div>
                        <Link className="card-subtitle underline" href={`mailto:${email}`}><Balancer>{email}</Balancer></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Committee_card