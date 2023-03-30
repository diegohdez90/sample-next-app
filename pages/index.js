import Link from "next/link";
import { getAllEvents, getFeaturedEvents } from "../data";
import EventList from "../components/EventList";
import EventItem from "../components/EventItem";

export default function Home() {

  const featureEvents =  getFeaturedEvents();
  return (
    <div>
        <h1>Home Page</h1>
        <EventList events={featureEvents} />
    </div>
  )
}
