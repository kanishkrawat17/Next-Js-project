/** Event with an Id */
import EventSummary from "../../components/event-detail/EventSummary";
import EventLogistics from '../../components/event-detail/EventLogistics';
import EventContent from "../../components/event-detail/EventContent";
import ErrorAlert from "../../components/ui/ErrorAlert";
import { getEventById , getFeaturedEvents } from "../../helpers/api-util";
const EventDetailPage = (props) => {
  // console.log("Props--9", props); // runs twice 1st log emoty and second log complete event object{ location: 'somelocation', ....}
  const { event } = props;

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

export async function getStaticProps(context) {
  // second this ran => 2nd during build
  const { eventId } = context.params;
  console.log("getStaticProps-42")
  const event = await getEventById(eventId);

  return {
    props: {
      event,
    }
  }
}

export async function getStaticPaths() {
  // first this ran => 1st during build
  console.log("getStaticPaths");
  const events = await getFeaturedEvents();

  const paths = events.map(event => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: 'blocking'
  };
};

