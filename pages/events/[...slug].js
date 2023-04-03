import { Fragment, useEffect, useState } from 'react';
import { getFilteredEvents } from '../../helpers/api-utils';
import EventList from '../../components/EventList';
import Button from '../../components/Button';
import useSwr from 'swr';
import { fetcher } from '../../utils/fetcher';
import { useRouter } from 'next/router';

const FilteredEventPage = () => {

    const router = useRouter();
    const [events, setEvents] = useState();
    const {data, error} = useSwr('https://nextjs-course-fc71e-default-rtdb.firebaseio.com/events.json', fetcher);

    useEffect(() => {
        if(data) {
            const events = [];
            for (let key in data) {
                events.push({
                    id: key,
                    ...data[key]
                });
            }
            setEvents(events);
        }
    }, [data])

    if (!events) {
        return (<Fragment>
            <p>Loading...</p>
        </Fragment>)
    }

    const [yearValue, monthValue] = router.query.slug;

    const year = +yearValue;
    const month = +monthValue;
    if(!(year || month) || isNaN(year) || isNaN(month) || year < 2015 || month < 1 || month > 12 || error) {
        return (<Fragment>
            <p>Invalid filter</p>
            <Button href="/events" label="All events" />
        </Fragment>)
    }

    let filteredEvents = events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === +year && eventDate.getMonth() === +month - 1;
    });

    if(!filteredEvents || filteredEvents.length === 0) {
        return (<Fragment>
            <h2>No events in the filter</h2>
            <Button href="/events" label="All events" />
        </Fragment>)
    }

    const date = new Date(year, month);

    return (<div>
        <h1>{ date.getFullYear() } { date.getMonth() }</h1>
        <EventList events={filteredEvents} />
    </div>)
}

/*
export async function getServerSideProps(context) {
    console.log('contextProps', context);
    const { params } = context;

    const [year, month] = params.slug;

    if(!(year || month) || isNaN(year) || isNaN(month) || year < 2015 || month < 1 || month > 12) {
        return {
            notFound: true,
            props: {
                hasError: true
            }
        };
    }


    const events = await getFilteredEvents({
        year: +year,
        month: +month
    })

    return {
        props: {
            events: events || null,
            date: {
                year: year,
                month: month - 1
            }
        }
    }
}
*/

export default FilteredEventPage;
