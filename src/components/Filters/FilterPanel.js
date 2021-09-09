import React from "react";
import "./EventCard.css";
import ImageComponent from "../Widgets/ImageComponent";
import MonetizationOnTwoToneIcon from '@material-ui/icons/MonetizationOnTwoTone';
import Tooltip from '@material-ui/core/Tooltip';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import colours from "../../style/colours";
import MenuItem from "@material-ui/core/MenuItem";
import FilterCard from "./FilterCard";

const FilterPanel = ({filters}) => {
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
        <Grid container alignItems="center"  direction="row">
            {filters.map((filter) => (
                <Grid item>
                <FilterCard filterName={filter.name} filterValue={filter.filterValue}>
                </FilterCard>
                </Grid>
            ))}
        </Grid>
            );
};

export default FilterPanel;
