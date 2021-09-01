import {Button, withStyles} from "@material-ui/core";

const CustomButton = withStyles({
    root: {
        background: 'linear-gradient(45deg, #00AEFFF9 30%, #337AB7 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

export default CustomButton;
