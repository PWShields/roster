import React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import {withStyles} from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import FilterButton from "./FilterButton";
const FilterCard = ({filterName, filterValue}) => {
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
            <Grid container alignItems="center" justifyContent="space-between" direction="row">
                <Grid item>
                    <FilterButton className="button-filter" id={filterName} size="small" variant="contained" color="primary"
                                  endIcon={<ClearRoundedIcon/>}>
                        {filterValue}
                    </FilterButton>
                </Grid>
            </Grid>
        </div>
    );
};

export default FilterCard;
