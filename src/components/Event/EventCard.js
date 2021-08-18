import React from "react";
import "./EventCard.css";

const EventCard = ({ eventInfo }) => {
    return (
        <div >
                <b>{eventInfo.timeText}</b>
                <p><i>{eventInfo.event.title}</i></p>
                <p>
                    {eventInfo.event.extendedProps.client}</p>
                <p></p>
        </div>
    );
};

export default EventCard;
