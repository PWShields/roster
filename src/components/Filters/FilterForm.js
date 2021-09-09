import React, {useEffect, useState} from "react";
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import MockDataService from '../../services/mockDataService';



const FilterForm = ({setShowModal, existingValues, setFilters}) => {

    const [locations, setLocations] = useState([])
    const [roles, setRoles] = useState([])
    const [staffSelect, setStaffSelect] = useState([])
    const [participants, setParticipants] = useState([])
    const [billable, setBillable] = useState([])
    const [type, setType] = useState([])

    const mockDataService = MockDataService()

    useEffect(() => {
        console.log(existingValues)
        setLocations(mockDataService.locations)
        setRoles(mockDataService.roles)
        setStaffSelect(mockDataService.staffSelect)
        setParticipants(mockDataService.participants)
        setBillable(mockDataService.billableValues)
        setType(mockDataService.appointmentTypes)
    }, [locations, roles]);

    const [formValues, setFormValues] = useState(existingValues);


    function updateFormValues(name, value) {
        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        updateFormValues(name, value);
    };


    function saveFilters() {
        setFilters(formValues)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        saveFilters();
        setShowModal(false);
    };

    function handleClose(event) {
        event.preventDefault();
        setShowModal(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs>
                    <TextField
                        margin="dense"
                        id="staff-input"
                        name="staff"
                        label="By staff member"
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
                <Grid item xs>
                    <TextField
                        margin="dense"
                        id="type-input"
                        name="type"
                        label="By appointment type"
                        type="text"
                        value={formValues.type ?? ""}
                        onChange={handleInputChange}
                        fullWidth
                        select
                    >
                        {type.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="participant-input"
                            name="participant"
                            label="By participant"
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
                    <Grid item xs>
                        <TextField
                            margin="dense"
                            id="location-input"
                            name="location"
                            label="by location"
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
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="billable-input"
                            name="billable"
                            label="By billing status"
                            type="text"
                            fullWidth
                            value={formValues.billable ?? ""}
                            onChange={handleInputChange}
                            select
                        >
                            {billable.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs>
                        <TextField
                            margin="dense"
                            id="role-input"
                            name="role"
                            label="by role"
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
                </Grid>
                    <Grid container justifyContent="flex-end">
                        <Button onClick={handleClose} color="default">
                            cancel
                        </Button>
                        <Button color="primary" type="submit">
                            save
                        </Button>
                    </Grid>
                </Grid>
        </form>
);
};
export default FilterForm;
