import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useQuery, useMutation } from '@apollo/client';
import { EDIT_EVENT } from '../../utils/mutations';
import { QUERY_EVENT_SINGLE } from '../../utils/mutations';
import { useNavigate, useParams  } from 'react-router-dom';

const EventEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, loading, error } = useQuery(QUERY_EVENT_SINGLE, { variables: { id } });
    const [editEvent] = useMutation(EDIT_EVENT);
    

    const [event, setEvent] =  useState({
        name: '',
        description: '',
        start: new Date(),
        end: new Date(),
        venue: "",
        latitude: 0,
        longitude: 0,
        owner: [],
        attendees: []
    });

  useEffect(() => {
    if (data) {
      setEvent({
        name: data.event.name,
        description: data.event.description,
        start: data.event.start,
        end: data.event.end,
        venue: data.event.venue,
        latitude: data.event.latitude,
        longitude: data.event.latitude,
        owner: data.event.owner,
        attendees: data.event.attendees,
      });
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };



    const handleSubmit = (e) => {
        e.preventDefault();
        editEvent({ variables: { id, ...event } })
          .then(() => navigate('/'))
          .catch(err => console.log(err));
      };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="flex-col justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h1>Edit Event</h1>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/events">back to events.</Link>
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  className="form-input"
                  placeholder="Event Name"
                  name="name"
                  type="text"
                  value={event.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Description"
                  name="description"
                  type="text"
                  value={event.description}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Start Date"
                  name="start"
                  type="date"
                  value={event.start}
                  onChange={handleChange}
                />
                
                <input
                  className="form-input"
                  placeholder="End Date"
                  name="end"
                  type="date"
                  value={event.end}
                  onChange={handleChange}
                />                
                <input
                  className="form-input"
                  placeholder="Venue"
                  name="venue"
                  type="venue"
                  value={event.venue}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
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
