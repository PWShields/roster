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


const AddEventForm = ({setShowModal, selectedData}) => {

    useEffect(() => {
        console.log(selectedData)
    });


    const defaultValues = {
        participant: "",
        location: "Home",
        role: "Care",
        staff: selectedData.resource.title,
        bookingNote: ""
    }
    const [formValues, setFormValues] = useState(defaultValues);
    const knownPhotos = ["Greg","Marcia"]


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const findPhoto = (participant) => {
        let photo = 'placeholder_head_Round.png'
        if(knownPhotos.includes(participant)){
            photo = participant+'Round.png'
        }
        return photo
    }

    function saveNewEvent() {
        let calendarApi = selectedData.view.calendar
        let resourceId = 1
        if (selectedData.resource) {
            resourceId = selectedData.resource.id
        }
        calendarApi.unselect() // clear date selection
        calendarApi.addEvent({
            id: createEventId(),
            start: selectedData.start,
            end: selectedData.end,
            allDay: selectedData.allDay,
            title: formValues.role,
            resourceId: resourceId,
            extendedProps: {
                client: {
                    name: formValues.participant,
                    image: findPhoto(formValues.participant)
                },
                bookingNote: formValues.bookingNote,
                status: 'draft'
            },
            backgroundColor: '#f2e2dc',
            borderColor: '#d9aa99',
            className:'moreBorder'
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        saveNewEvent();
        setFormValues(defaultValues)
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
                <Grid item>
                <TextField
                    margin="dense"
                    id="booking-input"
                    label="Booking Note"
                    name="bookingNote"
                    multiline
                    fullWidth
                    minRows={2}
                    value={formValues.bookingNote ?? ""}
                    onChange={handleInputChange}
                    type="text"
                />
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
