import React from "react";
import "./EventCard.css";
import ImageComponent from "../Widgets/ImageComponent";

const EventCard = ({ eventInfo }) => {
    return (
        <div className={"card"}>
                <b style = {{color: '#626262'}}>{eventInfo.timeText}</b>
                <p style={{color: '#c0c0c0'}}><i>{eventInfo.event.title}</i></p>
                <p>
                    {eventInfo.event.extendedProps.client.name}
                    <ImageComponent src = {`${process.env.PUBLIC_URL}/images/`+eventInfo.event.extendedProps.client.image} alt={''} width={30} height={30}/></p>

            {/*<img src={`${process.env.PUBLIC_URL}/images/`+eventInfo.event.extendedProps.client.image} alt={''} width={30} height={30}/>*/}

        </div>
    );
};

export default EventCard;
