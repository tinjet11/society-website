import { EventType } from '@/types';
import React from 'react'
import Events_card from './Events_card';
import LinkPlaceholder from '@/components/ui/link-placeholder';

interface Props{
    data: EventType[];
}

const UpcomingEvent = ({data}: Props) => {

    return (
                <>
                    {data && data.map((event) => (
                        <React.Fragment key={event.id}>
                            <Events_card
                                id={event.id}
                                title={event.title}
                                description={event.description}
                                date={event.date}
                                venue={event.venue}
                                imageUrl={event.imageUrl}
                                link={event.link}
                                eventContentId={event.eventContentId}
                            />
                        </React.Fragment>
                    ))}


                    {data.length === 0 && (
                        <div className='mt-3 mb-6'>
                            <p>No upcoming event available at this time.<br />
                                Follow us on <LinkPlaceholder text='social media' url='https://linktr.ee/unmcss' /> or subscribe to our newsletter for latest update!
                            </p>
                        </div>
                    )}
                </>
    )
}

export default UpcomingEvent