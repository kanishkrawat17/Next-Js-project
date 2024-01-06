import React from "react";
import Link from "next/link";
import styles from "./featured-event-item.module.css";

const FeaturedEventItem = (props) => {
  const { title, date, location, id, image } = props;
  const exploreEventLink = `/events/${id}`;
  const formattedAddress = location.replace(",", "\n");
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <li key={id} className={styles["item"]}>
      <img src={`${image}`} alt={title} />
      <div className={styles["content"]}>
        <div className={styles["summary"]}>
          <h2>{title}</h2>
        </div>
        <div className={styles["date"]}>
          <time>Date: {formattedDate}</time>
        </div>
        <div className={styles["address"]}>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div className={styles["actions"]}>
        <Link href={exploreEventLink}>Explore event</Link>
      </div>
    </li>
  );
};

export default FeaturedEventItem;
