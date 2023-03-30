import EventList from "../../components/EventList";
import { getAllEvents } from "../../data";

const Events = () => {

    const events = getAllEvents()
    return (<div>
        <h1>All Events</h1>
        <EventList events={events} />
    </div>)
}

export default Events;
