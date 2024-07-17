import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from '@fullcalendar/interaction'
import {useState} from 'react'
import "./index.css"


import { useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';


function Huddle() {
    const navigate = useNavigate();
    
    const [events, setEvents] = useState([
      { title: 'Meeting', start: new Date() },
      {title: "Meeting2", start: "2024-07-11T10:00:00", end: "2024-07-14T24:00:00"}
    ])
  
    const handleDateClick =(arg) =>{
      const titleprompt = prompt("Enter event information")
  
      const enddate = prompt("Enter end date DD/MM/YYYY")
      const eventEnd = enddate.split('/').reverse().join('-')
  

      if (titleprompt){
        setEvents([...events, {title: titleprompt, start: arg.dateStr, end: eventEnd}])
      }
    }
    const handleEventClick = (info) => {
      if (window.confirm(`Delete ${info.event.title}?`))
        info.event.remove()
    }

    // Redirect to login if not already
    if(!Auth.loggedIn()){
        navigate('/login');
    }
    
    return (
        <div>
        <div>
          <div className="d-flex justify-content-between align-items-center p-3 bg-light border">
          <h1>Huddle</h1>
            </div>
            <div className="card bg-white card-rounded w-50">
        <div className="card-header bg-dark text-center">
        <div className= "calendarcontent">

<FullCalendar
  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
  initialView='dayGridMonth'
  weekends={true}
  editable={true}
  events={events}
  selectable={true}
  // eventContent={renderEventContent}
  dateClick={handleDateClick}
  eventClick={handleEventClick}
/>
</div>
        </div>
      </div>
            </div>
        
        </div>
      )
  }
  
  export default Huddle;