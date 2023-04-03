import { getFilteredEvents } from '../../helpers/api-utils';
import EventList from '../../components/EventList';
import Button from '../../components/Button';
import { Fragment } from 'react';

const FilteredEventPage = (props) => {

    if(props.hasError) {
        return (<Fragment>
            <div>
                <h3>Invalid filter</h3>
            </div>
            <div>
                <Button href="/events">Show All Events</Button>
            </div>
        </Fragment>)
    }

    console.log(props);
    const date = new Date(props.date.year, props.date.month);

    return (<div>
        <h1>{ date.getFullYear() } { date.getMonth() }</h1>
        <EventList events={props.events} />
    </div>)
}

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


export default FilteredEventPage;
