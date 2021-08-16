import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import timelinePlugin from '@fullcalendar/timeline'
import adaptivePlugin from '@fullcalendar/adaptive';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';


// const initialDate = '2021-06-10'
const events = [
    {
        title: 'event 1',
        start: '2021-08-18T10:00:00',
        end: '2021-08-18T11:00:00'
    },
    {
        title: 'event 2',
        start: '2021-08-26T10:00:00',
        end: '2021-08-26T11:00:00'
    }
]

const Calendar = ({initialView, eventContent, initialDate}) => (
    <FullCalendar
        plugins={[
            dayGridPlugin,
            timeGridPlugin,
            timelinePlugin,
            adaptivePlugin,
            listPlugin,
            interactionPlugin
        ]}
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
        eventContent={eventContent}
    />
)

export default Calendar
