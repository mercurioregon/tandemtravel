import { useQuery } from '@apollo/client';
import { QUERY_EVENT_SINGLE } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import  EventEdit from './EventEdit.jsx';



const Event = () => {

  const { eventId } = useParams();

  const { loading, error, data } = useQuery(QUERY_EVENT_SINGLE, {
    variables: { eventId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <EventEdit event={data.event} />
    </div>
  );
};


export default Event;