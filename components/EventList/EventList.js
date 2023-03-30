import React, { Fragment } from 'react'
import EventItem from '../EventItem'

function EventList(props) {
  return (
    <Fragment>
      {
        props.events.length > 0 ?
        <Fragment>
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
        </Fragment> :
    <h3>No events available</h3>}
  </Fragment>)
}

export default EventList