import React from "react";
import "./EventCard.css";

const EventCard = ({ eventInfo }) => {
    return (
        <div className={"card"}>
                <b style = {{color: '#626262'}}>{eventInfo.timeText}</b>
                <p style={{color: '#c0c0c0'}}><i>{eventInfo.event.title}</i></p>
                <p>
                    {eventInfo.event.extendedProps.client}</p>
                <p></p>
        </div>
    );
};

export default EventCard;
