import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from '@material-ui/core/Modal';
import ReactDOM from "react-dom";
import "./AppModal.css";
import AddAppointmentForm from "../Form/AddAppointmentForm";
import {Button} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const AppModal = ({isShowing, hide}) => {
    const classes = useStyles();

    return (
        isShowing ? ReactDOM.createPortal
            (
                <React.Fragment>
                <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={isShowing}
                    onClose={hide}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={isShowing}>
                        <div className={classes.paper}>
                            <h2 id="transition-modal-title">New Shift or Appointment Details</h2>
                            <p id="transition-modal-description"></p>
                        <AddAppointmentForm saveData = {hide} cancelForm = {hide}/>
                            <Button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                                <span aria-hidden="true">&times;</span>
                            </Button>
                        </div>

                    </Fade>
                </Modal>
            </div>
                </React.Fragment>, document.body)
            : null)
}

export default AppModal;
