import Link from "next/link";
import { getFeaturedEvents } from "../data";
import EventList from "../components/EventList";
import EventItem from "../components/EventItem";

export default function Home() {

  const featureEvents =  getFeaturedEvents();
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/clients">Clients</Link></li>
      </ul>
      <div>
        <EventList>
          <ul>
            {
              featureEvents.map((eventItem, index) => (
                <EventItem key={index} />
              ))
            }
          </ul>
        </EventList>
      </div>
    </div>
  )
}
