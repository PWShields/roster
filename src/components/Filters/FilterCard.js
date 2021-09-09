import React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import {withStyles} from '@material-ui/core/styles';

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
            <div>
                <b style={{color: '#626262'}}>{filterName}</b>
                <p style={{color: '#c0c0c0'}}><i>{filterValue}</i></p>
            </div>
        </div>
    );
};

export default FilterCard;
