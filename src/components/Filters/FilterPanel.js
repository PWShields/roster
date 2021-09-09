import React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import {withStyles} from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";
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
            {/*{filters.map((filter) => (*/}
            {/*    <Grid item>*/}
            {/*    <FilterCard filterName={filter.name} filterValue={filter.filterValue}>*/}
            {/*    </FilterCard>*/}
            {/*    </Grid>*/}
            {/*))}*/}
            <p>FILTER PANEL</p>
        </Grid>
            );
};

export default FilterPanel;
