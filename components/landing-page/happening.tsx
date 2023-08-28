import React from 'react'
import LinkPlaceholder from '../ui/link-placeholder'
import Target from '../ui/link-placeholder'

const Happening = () => {
    return (
        <div className='flex flex-col w-[8/10] gap-y-4'>
            <div>    <p>We organize and host workshops, talks and society meetups! With the main focus of expanding and taking our
                members on an exhilarating adventure across the vast world of computer science. Get to know more about our
                previous events and activities <LinkPlaceholder url='/events' text='here' target='_self'/>.</p></div>

            <div><p>Get to know our <LinkPlaceholder url='/about-us#team' text='committee here' target='_self'/></p></div>


        </div>
    )
}

export default Happening