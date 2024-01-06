/** Event with an Id */
import { useRouter } from "next/router";
import FeaturedEventsList from "../../components/events/FeaturedEventsList";
import { getEventById } from "../../data/dummy-data.js";

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query?.eventId;
  const event = getEventById(eventId);
  if(!event) return <p>No event found..!!</p>
  /*Todo -> check lecture no. 161 and add the compoents*/
  return (
    <>
      <h1>EventDetailPage</h1>
      <FeaturedEventsList featuredEvents={[event]} />
    </>
  );
};

export default EventDetailPage;
