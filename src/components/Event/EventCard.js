import React from "react";
import "./EventCard.css";
import ImageComponent from "../Widgets/ImageComponent";
import Tooltip from '@material-ui/core/Tooltip';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const EventCard = ({eventInfo}) => {
    const HtmlTooltip = withStyles((theme) => ({
        tooltip: {
            backgroundColor: '#f5f5f9',
            color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9',
        },
    }))(Tooltip);
    return (
        <div className={"card"}>
            <HtmlTooltip
                title={
                    <React.Fragment>
                        <Typography color="inherit">Booking Note</Typography>
                        {eventInfo.event.extendedProps.bookingNote}
                    </React.Fragment>
                }
            >
                <div>
                    <b style={{color: '#626262'}}>{eventInfo.timeText}</b>
                    <p style={{color: '#c0c0c0'}}><i>{eventInfo.event.title}</i></p>
                    <p>
                        {eventInfo.event.extendedProps.client.name}
                        <ImageComponent
                            src={`${process.env.PUBLIC_URL}/images/` + eventInfo.event.extendedProps.client.image}
                            alt={''} width={30} height={30}/></p>
                </div>
            </HtmlTooltip>
        </div>
    );
};

export default EventCard;
