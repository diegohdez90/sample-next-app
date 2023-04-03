import { useRouter } from 'next/router'
import { getEventById } from '../../data';
import React from 'react';
import EventItem from '../../components/EventItem';
import EventSummary from '../../components/EventSummary';
import EventLogistics from '../../components/EventLogistics';
import EventContent from '../../components/EventContent';
import { getAll } from '../../helpers/api-utils';

const EventDetail = (props) => {

    const {event} = props;

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

    const { id } = context.params;

    const event = getEventById(id);

    return {
        props: {
            event: event || null
        }
    }
}

export async function getStaticPaths(context) {
    console.log('contextPaths', context);
    const events = await getAll();
    return {
        paths: events.map(event => ({
            params: {
                id: event.id
            }
        })),
        fallback: true
    }
}

export default EventDetail;
