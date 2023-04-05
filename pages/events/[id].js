import Head from 'next/head';
import { getEventById } from '../../data';
import React from 'react';
import EventSummary from '../../components/EventSummary';
import EventLogistics from '../../components/EventLogistics';
import EventContent from '../../components/EventContent';
import { getAll } from '../../helpers/api-utils';
import Feedback from '../../components/Feedback';

const EventDetail = (props) => {

    const {event} = props;

    const onSubmitFeedback = (name, email, feedback) => {
        console.log(
            name,
            email,
            feedback,
            event.id
        );
        fetch('/api/feedback', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                feedback,
                eventId: event.id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    if(!event) {
        return (<div>
            <h3>No event found!</h3>
        </div>)
    }
    return (<React.Fragment>
        <Head>
            <title>{ event.title }</title>
            <meta name='description' content={event.description}></meta>
        </Head>
        <EventSummary title={event.title} />
        <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
        <EventContent>
            <p>{event.description}</p>
        </EventContent>
        <Feedback onSummit={onSubmitFeedback} />
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
