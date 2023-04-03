import EventList from "../../components/EventList";
import { getFeatured } from "../../helpers/api-utils";

const Events = (props) => {

    return (<div>
        <h1>All Events</h1>
        <EventList events={props.featuredEvents} />
    </div>)
}

export async function getStaticProps() {
    const featuredEvents = await getFeatured();
    return {
        props: {
            featuredEvents: featuredEvents
        },
        revalidate: 10
    }
}

export default Events;
