import React from 'react';
import ReactDOM from 'react-dom';
import {makeStyles} from "@material-ui/core/styles";

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

const Modal = ({ isShowing, hide }) => {
    const classes = useStyles();

    return (
        isShowing ? ReactDOM.createPortal(
            <React.Fragment>
                <div className="modal-overlay"/>
                <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                    <div className="modal">
                        <div className="modal-header">
                            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close"
                                    onClick={hide}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <p>
                            Hello, I'm a modal.
                        </p>
                    </div>
                </div>
            </React.Fragment>, document.body
        ): null)
}

export default Modal;
