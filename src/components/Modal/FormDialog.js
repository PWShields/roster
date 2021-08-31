import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {MenuItem} from "@material-ui/core";

export default function FormDialog( {setShowModal} ) {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = ()=> {
        setIsOpen(false);
        setShowModal(false);
    }

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const locations = [
        {
            value: 'Home',
            label: 'Home Visit',
        },
        {
            value: 'Office',
            label: 'City Office',
        },
        {
            value: 'Regional',
            label: 'Local Office',
        }
    ];
    const roles = [
        {
            value: 'Physio',
            label: 'Physiotherapy',
        },
        {
            value: 'Care',
            label: 'In residence care',
        },
        {
            value: 'Shopping',
            label: 'Shopping',
        },
        {
            value: 'Outing',
            label: 'Outing',
        },
        {
            value: 'Cleaning',
            label: 'Cleaning',
        }
    ];
    const staff = [
        {
            value: 'Harry',
            label: 'Harry Belafonte',
        },
        {
            value: 'Doris',
            label: 'Doris Day',
        },
        {
            value: 'Jimmy',
            label: 'Jimmy Durante',
        }
        ];

 const participants = [
        {
            value: 'Marcia',
            label: 'Marcia',
        },
        {
            value: 'Greg',
            label: 'Greg',
        },
        {
            value: 'Jan',
            label: 'Jan',
        },
        {
            value: 'Mike',
            label: 'Mike',
        },
        {
            value: 'Carol',
            label: 'Carol',
        },
        {
            value: 'Peter',
            label: 'Peter',
        },
        {
            value: 'Bobby',
            label: 'Bobby',
        },
        {
            value: 'Cindy',
            label: 'Cindy',
        },
        {
            value: 'Alice',
            label: 'Alice',
        },
     {
            value: 'Tiger',
            label: 'Tiger',
        },
        {
            value: 'Fluffy',
            label: 'Fluffy',
        }
        ];

    return (
        <div>
            <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Event</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter new appointment or shift details here
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="participant"
                        label="Participant"
                        type="text"
                        fullWidth
                        select
                    >
                        {participants.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justifyContent="space-around">
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Start"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            <KeyboardTimePicker
                                margin="normal"
                                id="time-picker"
                                label="Start time"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justifyContent="space-around">
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="End"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            <KeyboardTimePicker
                                margin="normal"
                                id="time-picker"
                                label="End time"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <TextField
                        margin="dense"
                        id="location"
                        label="Location"
                        type="text"
                        fullWidth
                        select
                    >
                        {locations.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        margin="dense"
                        id="role"
                        label="Role"
                        type="text"
                        fullWidth
                        select
                    >
                        {roles.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        margin="dense"
                        id="staff"
                        label="Staff"
                        type="text"
                        fullWidth
                        select
                    >
                        {staff.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="tertiary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
