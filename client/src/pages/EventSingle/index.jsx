import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_EVENT_SINGLE } from '../../utils/queries';

const EventSingle = () => {
  const { eventId } = useParams();

  const { loading, data } = useQuery(QUERY_EVENT_SINGLE, {
      // pass URL parameter
      variables: { eventId: eventId },
  });

  const event = data?.event || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-3">
      <h1>Event View</h1><Link to={`/event/edit/${event._id}`}>
          <button >Edit</button> 
        </Link>
      <h3>{event.name} at {event.venue} {event.start} to {event.end}</h3>
      {event.description}
      <div>
        <Link to={`/events`}>
          <button >Event List</button> 
        </Link>
      </div>
    </div>
  );
};

export default EventSingle;
