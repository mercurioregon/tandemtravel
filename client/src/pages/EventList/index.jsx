import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation  } from '@apollo/client';
import { DELETE_EVENT } from '../../utils/mutations';
import EventCard from '../../components/EventCard';
import { QUERY_EVENT_LIST } from '../../utils/queries';

function DeleteEventButton({ eventId, refetch }) {
  const [deleteEvent] = useMutation(DELETE_EVENT, {
    onCompleted: () => refetch(),
  });

  const handleDelete = async () => {
    try {
      await deleteEvent({ variables: { id: eventId } });
    } catch (error) {
      alert('Failed to delete event');
    }
  };

  return <button onClick={handleDelete}>Delete Event</button>;
}

const EventList = () => {
    const {  loading, error, data, refetch } = useQuery(QUERY_EVENT_LIST);

    const events = data?.events || [];

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error: {error.message}</p>;

    if (!events.length) {
    return <h3>No events Yet</h3>;
  }


  return (
    <div>
      <h1>Events</h1><Link to={`/event/add`}>
          <button >Add Event</button> 
        </Link>
      {events &&
        events.map((event) => (
          <div key={event._id} className="card mb-3">
            <div className="card-body bg-light p-2">
              <EventCard event={event}  ></EventCard>
              <DeleteEventButton eventId={event._id} refetch={refetch} />
      
            </div>
          </div>
        ))}
    </div>
  );
};

export default EventList;
