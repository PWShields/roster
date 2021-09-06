import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import participants from "../../data/participants";
import staffSelect from "../../data/staffSelect";
import roles from "../../data/roles";
import locations from "../../data/locations";
import {createEventId} from "../../utilities/event-utils";

const defaultValues = {
    participant: "",
    location: "",
    role: "",
    staff: ""
}

const AddEventForm = ({setShowModal, selectedData}) => {
    const [formValues, setFormValues] = useState(defaultValues);

    useEffect(() => {
        console.log(selectedData)
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    function saveNewEvent() {
        let calendarApi = selectedData.view.calendar
        let resourceId = 1
        if (selectedData.resource) {
            resourceId = selectedData.resource.id
        }
        calendarApi.unselect() // clear date selection
        calendarApi.addEvent({
            id: createEventId(),
            start: selectedData.startStr,
            end: selectedData.endStr,
            allDay: selectedData.allDay,
            title: formValues.role,
            resourceId: resourceId,
            extendedProps: {
                client: {
                    name: formValues.participant,
                    image: '',
                },
                status: 'draft'
            },
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        saveNewEvent();
        setShowModal(false);
    };

    function handleClose(event) {
        event.preventDefault();
        setShowModal(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container direction="column">
                <Grid item>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="participant-input"
                        name="participant"
                        label="Participant"
                        type="text"
                        fullWidth
                        value={formValues.participant ?? ""}
                        onChange={handleInputChange}
                        select
                    >
                        {participants.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField
                        margin="dense"
                        id="location-input"
                        name="location"
                        label="Location"
                        type="text"
                        value={formValues.location ?? ""}
                        onChange={handleInputChange}
                        fullWidth
                        select
                    >
                        {locations.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField
                        margin="dense"
                        id="role-input"
                        name="role"
                        label="Role"
                        type="text"
                        value={formValues.role ?? ""}
                        onChange={handleInputChange}
                        fullWidth
                        select
                    >
                        {roles.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item>
                    <TextField
                        margin="dense"
                        id="staff-input"
                        name="staff"
                        label="Staff"
                        type="text"
                        value={formValues.staff ?? ""}
                        onChange={handleInputChange}
                        fullWidth
                        select
                    >
                        {staffSelect.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid container justifyContent="flex-end">
                    <Button onClick={handleClose} color="default">
                        cancel
                    </Button>
                    <Button color="primary"  type="submit">
                        save
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};
export default AddEventForm;
