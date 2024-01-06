/** List of all Events */
import { getAllEvents } from '../../data/dummy-data';
import FeaturedEventsList from '../../components/events/FeaturedEventsList'
const EventsList = () => {
  const events = getAllEvents();
  return (
    <>
      <h1>EventDetailPage</h1>
      <FeaturedEventsList featuredEvents={[...events]} />
    </>
  );
};

export default EventsList;
