import React from "react";
import "./EventCard.css";

const EventCardNew = ({ eventInfo }) => {
    return (
        <div className={"card"}>
                <b style = {{color: '#626262'}}>{eventInfo.timeText}</b>
                <p style={{color: '#c0c0c0'}}><i>{eventInfo.event.title}</i></p>
        </div>
    );
};

export default EventCardNew;
