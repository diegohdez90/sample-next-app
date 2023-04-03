import { useRouter } from 'next/router'
import { getEventById } from '../../data';
import React from 'react';
import EventItem from '../../components/EventItem';
import EventSummary from '../../components/EventSummary';
import EventLogistics from '../../components/EventLogistics';
import EventContent from '../../components/EventContent';

const EventDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const event = getEventById(id);

    if(!event) {
        return (<div>
            <h3>No event found!</h3>
        </div>)
    }
    return (<React.Fragment>
        <EventSummary title={event.title} />
        <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
        <EventContent>
            <p>{event.description}</p>
        </EventContent>
    </React.Fragment>)
}

export async function getStaticProps(context) {
    console.log('contextProps', context);

    return {
        props: {
            event: null
        }
    }
}

export async function getStaticPaths(context) {
    console.log('contextPaths', context);

    return {
        paths: [],
        fallback: true
    }
}

export default EventDetail;
