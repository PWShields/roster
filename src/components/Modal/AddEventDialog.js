import React, {useState} from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import {Dialog, DialogContent} from "@material-ui/core";
import AddEventForm from "../Form/AddEventForm";


export default function AddEventDialog( {setShowModal, selectedData} ) {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        setShowModal(false);
    }

    return (
        <div>
            <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add Event</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter new appointment or shift details here
                    </DialogContentText>
                    <AddEventForm setShowModal = {setShowModal}  selectedData={selectedData}  />
                </DialogContent>
            </Dialog>
        </div>
    );
}
