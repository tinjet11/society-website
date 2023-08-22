import { EventType } from '@/types';
import React from 'react'
import Events_card from './Events_card';
import LinkPlaceholder from '@/components/ui/link-placeholder';

interface Props{
    data: EventType[];
}

const UpcomingEvent = ({data}: Props) => {

/*     const [isLoading, setIsLoading] = useState(true);
    const [event, setEvent] = useState<EventType[]>([])
    const [isMounted, setIsMounted] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        const fetchEvents = async () => {
            setIsLoading(true);
            const events = await getEvents();
            setEvent(events);
            setIsLoading(false);
        };
        fetchEvents();

    }, []);


    useEffect(() => {
        setIsMounted(true);
    }, []);

    //prevent hydration error
    if (!isMounted) {
        return null;
    }
 */


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