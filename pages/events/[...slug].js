/** Event with filtered events. */
import React from "react";
import EventsList from "../../components/events/EventsList";
import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";

const FilteredEvents = () => {
  const router = useRouter();
  const [month, year] = router.query.slug;
  const events = getFilteredEvents({ year, month });

  const noEventsFound  = <p>No events on this time</p>
  return (
    <>
      {events && events.length ? (
        <EventsList featuredEvents={events} />
      ) : (
        noEventsFound
      )}
    </>
  );
};

export default FilteredEvents;
