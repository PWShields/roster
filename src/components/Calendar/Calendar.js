import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import timelinePlugin from '@fullcalendar/timeline'
import adaptivePlugin from '@fullcalendar/adaptive';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';



const Calendar = ({initialView, events, eventContent, initialDate, weekendsVisible, handleSelect, eventClick}) => (
    <FullCalendar
        plugins={[
            dayGridPlugin,
            timeGridPlugin,
            timelinePlugin,
            adaptivePlugin,
            listPlugin,
            interactionPlugin
        ]}
        editable={true}
        droppable = {true}
        selectable={true}
        select={handleSelect}
        eventClick={eventClick}
        schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
        initialView={initialView}
        initialDate={initialDate}
        weekends={weekendsVisible}
        headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        }}
        scrollTime={0}
        events={events}
    />
)

export default Calendar
