import {Button, withStyles} from "@material-ui/core";
import colours from "../../style/colours"

const FilterButton = withStyles({
    root: {
        background: 'linear-gradient(45deg, #FF9966 30%, #FFE4D7 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 24,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px '+colours.red_damascus,
    },
    label: {

    },
})(Button);

export default FilterButton;
