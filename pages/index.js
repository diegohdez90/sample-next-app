import Link from "next/link";
import { getAllEvents, getFeaturedEvents } from "../data";
import EventList from "../components/EventList";
import EventItem from "../components/EventItem";

export default function Home() {

  const featureEvents =  getFeaturedEvents();
  return (
    <div>
        <h1>Home Page</h1>
        <EventList>
          <ul>
            {
              featureEvents.map((eventItem, index) => (
                <EventItem
                  key={index}
                  id={eventItem.id}
                  title={eventItem.title}
                  description={eventItem.description}
                  location={eventItem.location}
                  date={eventItem.date}
                  image={eventItem.image}
                  idFeatured={eventItem.isFeatured}
                />
              ))
            }
          </ul>
        </EventList>
    </div>
  )
}
