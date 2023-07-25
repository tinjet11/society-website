import UpcomingEvent from './upcoming-event';
import PreviousEvent from './previous-event';

const Events = () => {

    return (

        <div className='flex flex-col m-2 rounded-lg p-4'>

            <h1 className="text-center title-header" id='upcomingEvent'>Upcoming Events</h1>

            <UpcomingEvent />

            <h1 className="text-center title-header" id='previousEvent'>Previous Events</h1>

            <PreviousEvent />

        </div>


    )
}

export default Events