import React from "react";
import Button from "../ui/Button";
import styles from "./events-search.module.css";

const EventsSearch = (props) => {
  return (
    <form className={styles.form}>
      <div className={styles.controls}>
        <div className={styles.controls}>
          <label htmlFor="year" className={styles.controls}>Year</label>
          <select id="year" className={styles.controls}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.controls}>
          <label htmlFor="month" className={styles.controls}>Month</label>
          <select id="month" className={styles.controls}>
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
      <Button onClick={(e) =>{
        e.preventDefault()
      }}>Find events</Button>
    </form>
  );
};

export default EventsSearch;