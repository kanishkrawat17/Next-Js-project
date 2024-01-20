import React from "react";
import EventItem from "./EventItem";
import styles from "./featured-events-list.module.css";

const EventsList = (props) => {
  const { featuredEvents } = props;

  console.log(featuredEvents, "featuredEvents--")
  return (
    <ul className={styles.list}>
      {
        featuredEvents.map(eventData => <EventItem {...eventData} key={eventData.id}/>)
      }
    </ul>
  )
};

export default EventsList;
