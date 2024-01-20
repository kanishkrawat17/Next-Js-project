import React from "react";
import Button from "../ui/Button";
import styles from "./events-search.module.css";
import { useRef } from "react";
const EventsSearch = (props) => {
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent from refresh or sent a HTTP request.
    const month = monthRef.current.value;
    const year = yearRef.current.value;
    props.onSearch(month, year);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.controls}>
        <div className={styles.controls}>
          <label htmlFor="year" className={styles.controls}>
            Year
          </label>
          <select id="year" className={styles.controls} ref={yearRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.controls}>
          <label htmlFor="month" className={styles.controls}>
            Month
          </label>
          <select id="month" className={styles.controls} ref={monthRef}>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find events</Button>
    </form>
  );
};

export default EventsSearch;
