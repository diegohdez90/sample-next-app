import { useRouter } from 'next/router';
import { getFeaturedEvents, getFilteredEvents } from "../data";
import EventList from "../components/EventList";
import EventSearch from "../components/EventSearch";


export default function Home() {

  const featureEvents =  getFeaturedEvents();

  const router = useRouter();

  const onFilter = (year, month) => {
    router.push(`/events/${year}/${month}`)
  }

  return (
    <div>
        <h1>Home Page</h1>
        <EventSearch onSearch={onFilter} />
        <EventList events={featureEvents} />
    </div>
  )
}
