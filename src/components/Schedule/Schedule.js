import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import adaptivePlugin from '@fullcalendar/adaptive';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';


const Schedule = ({initialView, eventContent, initialDate, resources, events, weekendsVisible, handleSelect}) => (

    <FullCalendar
        plugins={[resourceTimelinePlugin, dayGridPlugin, timeGridPlugin, interactionPlugin, adaptivePlugin]}
        initialView={initialView}
        initialDate={initialDate}
        weekends={weekendsVisible}
        editable={true}
        droppable = {true}
        selectable={true}
        select = {handleSelect}
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

