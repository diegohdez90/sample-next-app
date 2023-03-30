import React from 'react'

function EventList(props) {
  return (
    <div>
        <h1>Event List</h1>
        {props.children}
    </div>
  )
}

export default EventList