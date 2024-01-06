import React from "react";
import FeaturedEventItem from "./FeaturedEventItem";
import styles from "./featured-events-list.module.css";

const FeaturedEventsList = (props) => {
  const { featuredEvents } = props;

  return (
    <ul className={styles.list}>
      {
        featuredEvents.map(eventData => <FeaturedEventItem {...eventData} key={eventData.id}/>)
      }
    </ul>
  )
};

export default FeaturedEventsList;
