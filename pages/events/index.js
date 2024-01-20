/** List of all Events */
import React from 'react';
import { getAllEvents } from '../../helpers/api-util';
import EventsList from '../../components/events/EventsList';
const EventsListPage = (props) => {
  const { events } = props;  

  return (
    <>
      <EventsList featuredEvents={[...events]} />
    </>
  );
};

export async function getStaticProps() {
  const allEvents = await getAllEvents();

  return {
    props: {
      events: allEvents
    }
  }
}

export default EventsListPage;
