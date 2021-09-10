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


    function lookupBillableLabel(billable) {
        let label = 'billable'
        if(billable === '0'){
            label = 'Not billable'
        }
        return label;
    }

    return (
        <Grid container alignItems="center"  direction="row">
            <Grid item><p>Filters:</p></Grid>
            {(filters.participant !== "") && <Grid item>
                <FilterCard filterName="participant" filterValue={filters.participant}>
                </FilterCard>
            </Grid>
            }
            {(filters.location !== "") && <Grid item>
                <FilterCard filterName="location" filterValue={filters.location}>
                </FilterCard>
            </Grid>
            }
            {(filters.staff !== "") && <Grid item>
                <FilterCard filterName="staff" filterValue={filters.staff}>
                </FilterCard>
            </Grid>
            }
            {(filters.role !== "") && <Grid item>
                <FilterCard filterName="role" filterValue={filters.role}>
                </FilterCard>
            </Grid>
            }
            {(filters.billable !== "") && <Grid item>
                <FilterCard filterName="billable" filterValue={lookupBillableLabel(filters.billable)}>
                </FilterCard>
            </Grid>}
            {(filters.type !== "") && <Grid item>
                <FilterCard filterName="type" filterValue={filters.type}>
                </FilterCard>
            </Grid>
            }
        </Grid>
    );
};

export default FilterPanel;
