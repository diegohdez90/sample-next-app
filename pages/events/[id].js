import Head from 'next/head';
import { getEventById } from '../../data';
import React, { useContext } from 'react';
import EventSummary from '../../components/EventSummary';
import EventLogistics from '../../components/EventLogistics';
import EventContent from '../../components/EventContent';
import { getAll } from '../../helpers/api-utils';
import Feedback from '../../components/Feedback';
import NotificationContext from '../../store/notitication-context';

const EventDetail = (props) => {

    const {event} = props;

    const context = useContext(NotificationContext)

    const onSubmitFeedback = (name, email, feedback) => {
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
                context.showNotification({title: 'Feedback sent', message: data.message, status: 'success'})
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

    const { id } = context.params;

    const event = getEventById(id);

    return {
        props: {
            event: event || null
        }
    }
}

export async function getStaticPaths(context) {
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
