import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { EDIT_EVENT } from '../../utils/mutations';
import { Link, useNavigate } from 'react-router-dom';

const EventEdit = ({ event }) => {
  
  const navigate = useNavigate();
  
  const [formState, setFormState] = useState({
    _id: event._id,
    name: event.name,
    description: event.description,
    start: new Date(event.start),
    end: new Date(event.end),
    venue: event.venue,
    latitude: event.latitude,
    longitude: event.longitude,
    owner: event.owner,
    attendees:  event.attendees
  });

    const [editEvent, { error, data }] = useMutation(EDIT_EVENT);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      console.log(formState);
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();

      console.log("handleFormSubmit",{ ...formState });
    try {
      const { data } = await editEvent({
        variables: { ...formState },
      });

      //redirect to event
      navigate(`/event/${data.editEvent._id}`);
      
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-col justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h1>Edit Event</h1>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to={`/event/${event._id}`}>back to event.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Event Name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Description"
                  name="description"
                  type="text"
                  value={formState.description}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Start Date"
                  name="start"
                  type="date"
                  value={formState.start.toISOString().substring(0, 10)}
                  onChange={handleChange}
                />
                
                <input
                  className="form-input"
                  placeholder="End Date"
                  name="end"
                  type="date"
                  value={formState.end.toISOString().substring(0, 10)}
                  onChange={handleChange}
                />                
                <input
                  className="form-input"
                  placeholder="Venue"
                  name="venue"
                  type="venue"
                  value={formState.venue}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Save
                </button>
                <Link to="/events">
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="button"
                >
                  Cancel
                </button>
                </Link>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

  
  export default EventEdit;