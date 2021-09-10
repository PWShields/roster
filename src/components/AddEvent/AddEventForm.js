import React, {useEffect, useState} from "react";
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {DateTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import MockDataService from '../../services/mockDataService';

import {createEventId} from "../../utilities/event-utils";
import colours from "../../style/colours";


const AddEventForm = ({setShowModal, selectedData}) => {

    const [locations, setLocations] = useState([])
    const [roles, setRoles] = useState([])
    const [staffSelect, setStaffSelect] = useState([])
    const [participants, setParticipants] = useState([])

    const mockDataService = MockDataService()

    useEffect(() => {
        console.log(selectedData)
        setLocations(mockDataService.locations)
        setRoles(mockDataService.roles)
        setStaffSelect(mockDataService.staffSelect)
        setParticipants(mockDataService.participants)
    },[]);

    const currentDate = selectedData.start
    const oneHourLater = new Date(currentDate)

    function findStaff() {
        let staffMember = ""
        if (selectedData && selectedData.resource) {
          staffMember = selectedData.resource.title
        }
        return staffMember
    }

    const defaultValues = {
        participant: "",
        location: "Home",
        role: "Care",
        staff: findStaff(),
        bookingNote: "",
        startDate: currentDate,
        endDate: oneHourLater.setHours(oneHourLater.getHours() + 1)
    }
    const [formValues, setFormValues] = useState(defaultValues);
    const knownPhotos = ["Greg","Marcia"]


    function updateFormValues(name, value) {
        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

    const handleStartChange = (date) => {
        updateFormValues("startDate", date)
    }

    const handleEndChange = (date) => {
        updateFormValues("endDate", date)
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        updateFormValues(name, value);
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
        const newEvent = {
            id: createEventId(),
            start: formValues.startDate,
            end: formValues.endDate,
            allDay: false,
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
            backgroundColor: colours.booked,
            borderColor: colours.booked_border,
            className: 'moreBorder'
        };
        calendarApi.addEvent(newEvent
        )
        let allEvents = calendarApi.getEvents();
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
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justifyContent="space-around">
                        <DateTimePicker
                            margin="normal"
                            id="start-date-input"
                            label="Start"
                            name="startDate"
                            format="dd MMM yy hh:mm a"
                            value={formValues.startDate}
                            onChange={handleStartChange}
                        />
                        <DateTimePicker
                            margin="normal"
                            id="end-date-input"
                            label="End"
                            name="endDate"
                            format="dd MMM yy hh:mm a"
                            value={formValues.endDate}
                            onChange={handleEndChange}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
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
