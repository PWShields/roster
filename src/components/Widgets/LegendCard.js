import React from "react";
import {Grid} from "@material-ui/core";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import colours from "../../style/colours";
import "./Widget.css";

const LegendCard = () => {
    return (
        <div className={"card"}>
            <Grid container alignItems="center"  direction="row">
                <Grid item>
                  <FiberManualRecordIcon fontSize="small" style={{  color: colours.tea_green }}/>
                </Grid>
                <Grid item>
                    <p style={{fontSize: "1vh"}}>Booked</p>
                </Grid>
                <Grid item>
                  <FiberManualRecordIcon fontSize="small" style={{ color: colours.polo_blue }}/>
                </Grid>
                <Grid item>
                    <p style={{fontSize: "1vh"}}>Completed</p>
                </Grid>
                <Grid item>
                  <FiberManualRecordIcon fontSize="small" style={{ color: colours.atomic_tangerine }}/>
                </Grid>
                <Grid item>
                    <p style={{fontSize: "1vh"}}>Cancelled</p>
                </Grid>
            </Grid>

        </div>
    );
};

export default LegendCard;
