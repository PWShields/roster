import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import timelinePlugin from '@fullcalendar/timeline'
import adaptivePlugin from '@fullcalendar/adaptive';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';



const Calendar = ({initialView, events, eventContent, initialDate}) => (
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
        schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
        initialView={initialView}
        initialDate={initialDate}
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
