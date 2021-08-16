import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import adaptivePlugin from '@fullcalendar/adaptive';
import interactionPlugin from '@fullcalendar/interaction';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';


const Schedule = ({initialView, eventContent, initialDate, resources, events}) => (

    <FullCalendar
        plugins={[resourceTimelinePlugin, dayGridPlugin, timeGridPlugin, interactionPlugin, adaptivePlugin]}
        initialView={initialView}
        initialDate={initialDate}
        editable={true}
        schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
        headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'resourceTimelineDay,threeDays,resourceTimelineWeek,resourceTimelineMonth'
        }}
        resourceAreaHeaderContent='Staff'
        views={{
            threeDays : {
            type : 'resourceTimeline',
            duration : {days : 3},
            buttonText : '3 day'
        }
        }}
        resources = {resources}
        events = {events}
    />
)

export default Schedule

