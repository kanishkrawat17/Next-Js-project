import React from "react";
import EventsList from "../components/events/EventsList";
import { getFeaturedEvents } from "../dummy-data.js";
import EventsSearch from '../components/events/EventsSearch'
import { useRouter } from "next/router";
const HomePage = () => {
  const router = useRouter();
  const featuredEvents = getFeaturedEvents();

  const onSearch = (month, year) => {
    month = parseInt(month, 10); // convert "01" type values to integer.
    const fullPath = `/events/${month}/${year}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={onSearch}/>
      <EventsList featuredEvents={featuredEvents}/>
    </>
  );
};

export default HomePage;
