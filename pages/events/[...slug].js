/** Event with filtered events. */
import React from "react";
import EventsList from "../../components/events/EventsList";
import { getAllEvents, getFilteredEvents} from "../../helpers/api-util";

const FilteredEvents = (props) => {
  const { events } = props;
console.log("Hmm", props)

  const noEventsFound = <p>No events on this time</p>;

  return events && events.length ? (
    <EventsList featuredEvents={events} />
  ) : (
    noEventsFound
  );
};

export default FilteredEvents;

export async function getStaticPaths(context) {
  console.log(context, "PAth cONTEXT"); // not shown again during prod build.{ locales: undefined, defaultLocale: undefined } PAth cONTEXT
  return {
    paths: [
      { params: { slug: [ "05", "2021"] } },
      { params: { slug: [ "03", "2022",] } },
    ],
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { slug } = context.params;
  const [month, year] = slug;

  const filteredEvents = await getFilteredEvents({ month, year });

  return {
    props: {
      events: filteredEvents,
    },
  };
}
