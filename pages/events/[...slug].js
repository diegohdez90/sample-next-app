import { useRouter } from  'next/router';
import { getFilteredEvents } from '../../data';
import EventList from '../../components/EventList';
import Button from '../../components/Button';

const FilteredEventPage = () => {
    const router = useRouter();

    const [year, month] = router.query.slug;

    if(!(year || month) || isNaN(year) || isNaN(month) || year < 2015 || month < 1 || month > 12) {
        return (<div>
            <h1>No events filtered</h1>
            <Button href="/events" label="Return to Events" />
        </div>)
    }

    const events = getFilteredEvents({
        year: +year,
        month: +month
    })

    console.log(events);
    return (<div>
        <EventList events={events} />
    </div>)
}

export default FilteredEventPage;
