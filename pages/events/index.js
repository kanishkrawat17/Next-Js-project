/** List of all Events */
import { getAllEvents } from '../../dummy-data';
import EventsList from '../../components/events/EventsList'
const EventsListPage = () => {
  const events = getAllEvents();
  return (
    <>
      <EventsList featuredEvents={[...events]} />
    </>
  );
};

export default EventsListPage;
