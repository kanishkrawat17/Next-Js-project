/** Event with an Id */
import { useRouter } from "next/router";
import EventSummary from "../../components/event-detail/EventSummary";
import EventLogistics from '../../components/event-detail/EventLogistics';
import EventContent from "../../components/event-detail/EventContent";
import ErrorAlert from "../../components/ui/ErrorAlert";
import { getEventById } from "../../dummy-data";
const EventDetailPage = () => {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found..!!</p>
      </ErrorAlert>
    );
  }
  /*Todo -> check lecture no. 161 and add the compoents*/
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
