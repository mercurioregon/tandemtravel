// Use caution, I am using Xpert learning assistant to refactor the code to clean it up. this must be tested before it's deployed. - Ruben

import React, { useEffect, useRef } from "react";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import "@fullcalendar/core/main.css"; // Include the CSS file for FullCalendar

const MyCalendarComponent = () => {
  const calendarRef = useRef(null);

  useEffect(() => {
    const calendarEl = calendarRef.current;
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      initialView: "dayGridMonth",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,listWeek",
      },
    });
    calendar.render();

    return () => {
      calendar.destroy(); // Clean up FullCalendar when component unmounts
    };
  }, []); // Run this effect only once on component mount

  return <div ref={calendarRef} />;
};

export default MyCalendarComponent;
