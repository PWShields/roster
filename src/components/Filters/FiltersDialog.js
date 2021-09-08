import React, {useState} from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import {Dialog, DialogContent} from "@material-ui/core";
import FilterForm from "./FilterForm";


export default function FiltersDialog({setShowModal, existingValues, setFilters} ) {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        setShowModal(false);
    }

    return (
        <div>
            <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Filters</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    Restrict the view of the data with 1 or more of the following filters.
                    </DialogContentText>
                    <FilterForm setShowModal = {setShowModal} existingValues={existingValues} setFilters={setFilters} />
                </DialogContent>
            </Dialog>
        </div>
    );
}
