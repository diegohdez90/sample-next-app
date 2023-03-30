import React from 'react'
import EventItem from '../EventItem'

function EventList(props) {
  return (
    <div>
        <h1>Event List</h1>
        <ul>
            {
              props.events.map((eventItem, index) => (
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

    </div>
  )
}

export default EventList