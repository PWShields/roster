import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import adaptivePlugin from '@fullcalendar/adaptive';
import interactionPlugin from '@fullcalendar/interaction';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import listPlugin from '@fullcalendar/list';

const Schedule = ({
                      initialView, eventContent, initialDate, resources, events, weekendsVisible, handleSelect,
                      eventClick, handleDrop
                  }) => (
    <FullCalendar
        plugins={[resourceTimelinePlugin, dayGridPlugin, timeGridPlugin, interactionPlugin, adaptivePlugin,
            listPlugin
        ]}
        initialView={initialView}
        initialDate={initialDate}
        weekends={weekendsVisible}
        aspectRatio = {1.35}
        slotMinWidth={110}
        navLinks={true}
        editable={true}
        droppable={true}
        drop={handleDrop}
        selectable={true}
        select={handleSelect}
        eventClick={eventClick}
        schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
        headerToolbar={{
            left: 'title',
            center: '',
            right: 'prev,next today listMonth,resourceTimelineMonth,resourceTimelineWeek,threeDays,resourceTimelineDay'
        }}
        resourceAreaHeaderContent='Staff'
        views={{
            threeDays: {
                type: 'resourceTimeline',
                duration: {days: 3},
                buttonText: '3 day'
            }
        }}
        resources={resources}
        events={events}
        eventContent={eventContent} // custom render function
    />
)

export default Schedule

