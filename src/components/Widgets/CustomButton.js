import {Button, withStyles} from "@material-ui/core";
import colours from "../../style/colours"

const CustomButton = withStyles({
    root: {
        background: 'linear-gradient(45deg, #00AEFFF9 30%, #337AB7 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px '+colours.prussian_blue,
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

export default CustomButton;
