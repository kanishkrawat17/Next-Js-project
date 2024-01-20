import React from "react";
import EventsList from "../components/events/EventsList";
import EventsSearch from "../components/events/EventsSearch";
import { getFeaturedEvents } from "../helpers/api-util";
import { useRouter } from "next/router";

const HomePage = (props) => {
  const { events } = props;
  const router = useRouter();
  
  const onSearch = (month, year) => {
    month = parseInt(month, 10); // convert "01" type values to integer.
    const fullPath = `/events/${month}/${year}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={onSearch} />
      <EventsList featuredEvents={events} />
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 60,
  };
}
// { e1: {}, e2: {}, e3: {}, e4: {}} // real data
//[ { id: e1, }] // transformed data
