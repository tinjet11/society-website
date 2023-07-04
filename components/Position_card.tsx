import { positionCardProps } from '@/types'
import React from 'react'

const Position_card = ({title,description}:positionCardProps) => {
    return (

        <div className="flex lg:flex-row flex-col justify-between m-4 card-bg rounded-lg shadow-md p-4">
            <div className="flex flex-col">
                <div className="committee-card-title font-semibold mb-2">
                   {title}
                </div>

                <div className="card-subtitle">
                  {description}
                </div>
            </div>

            <div className="self-end">
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">
                    Apply Now
                </button>
            </div>
        </div>

    )
}

export default Position_card