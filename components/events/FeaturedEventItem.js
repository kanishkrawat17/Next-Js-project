import React from "react";
import Button from "../ui/Button";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";

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
          <DateIcon />
          <time>{formattedDate}</time>
        </div>
        <div className={styles["address"]}>
          <AddressIcon />
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div className={styles["actions"]}>
        <Button link={exploreEventLink}>
          <span>Explore event</span>
          <span><ArrowRightIcon/></span>
        </Button>
      </div>
    </li>
  );
};

export default FeaturedEventItem;
