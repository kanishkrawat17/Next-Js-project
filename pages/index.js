import React from "react";
import FeaturedEventsList from "../components/events/FeaturedEventsList";
import { getFeaturedEvents } from "../data/dummy-data.js";
import EventsSearch from '../components/events/EventsSearch'
const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <h1>List of featured events</h1>
      <EventsSearch/>
      <FeaturedEventsList featuredEvents={featuredEvents}/>
    </>
  );
};

export default HomePage;
