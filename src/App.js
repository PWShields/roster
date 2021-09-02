import {Container, Switch, withStyles, Button} from "@material-ui/core";
import {DragIndicator} from '@material-ui/icons';
import {grey} from "@material-ui/core/colors";
import React, {useState, useEffect} from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Calendar from "./components/Calendar/Calendar";
import Schedule from "./components/Schedule/Schedule";
import staff from "./data/staff";
import shifts from "./data/shifts";
import {Draggable} from '@fullcalendar/interaction';
import {createEventId} from './utilities/event-utils'
import EventCard from "./components/Event/EventCard";
import EventCardNew from "./components/Event/EventCardNew";
import useModal from "./components/Hooks/useModal";
import FormDialog from "./components/Modal/FormDialog";
import Grid from "@material-ui/core/Grid";
import CustomButton from "./components/Widgets/CustomButton";



function App() {
    const [LightTheme, setLightTheme] = useState(true);
    const [ShowSchedule, setShowSchedule] = useState(true);
    const [WeekendsVisible, setWeekendsVisible] = useState(false);
    const [ShowFilters, setShowFilters] = useState(false);
    const [ShowControls, setShowControls] = useState(true);
    const [SelectedDate, setSelectedDate] = useState('');
    const {isShowing, toggle} = useModal();
    const [open, setOpen] = useState(false);


    useEffect(() => {
        let draggableEl = document.getElementById('new-shift');
            new Draggable(draggableEl);
    });


    const handleDateSelect = (selectInfo) => {
        console.log(selectInfo)
        console.log(selectInfo.startStr)
        // setSelectedDate(selectInfo.startStr)
        // toggle()
        handleClickAdd()
        // setShowAddEvent(true);
        // if (IsClickable) {
        //     let title = prompt('Please enter a new title for your event')
        //     let calendarApi = selectInfo.view.calendar
        //     let resourceId = 1
        //     if (selectInfo.resource) {
        //         resourceId = selectInfo.resource.id
        //     }
        //     calendarApi.unselect() // clear date selection
        //     if (title) {
        //         calendarApi.addEvent({
        //             id: createEventId(),
        //             title,
        //             start: selectInfo.startStr,
        //             end: selectInfo.endStr,
        //             allDay: selectInfo.allDay,
        //             resourceId,
        //             extendedProps: {
        //                 client: {
        //                     name: '',
        //                     image: '',
        //                 },
        //                 status: 'draft'
        //             },
        //         })
        //     }
        // }
    }


    const handleDrop = (dropInfo) => {
        let title = prompt('Please enter a new title for your event')
        let calendarApi = dropInfo.view.calendar
        let resourceId = 1
        if (dropInfo.resource) {
            resourceId = dropInfo.resource.id
        }
        calendarApi.unselect() // clear date selection
        if (title) {
        calendarApi.addEvent({
            id: createEventId(),
            title: "new",
            start: dropInfo.dateStr,
            end: dropInfo.dateStr,
            allDay: false,
            resourceId,
            extendedProps: {
                client: {
                    name: "",
                    image: "",
                },
                status: 'draft'
            },
        })
        }
    }
    const handleClickAdd = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEventClick = (clickInfo) => {
        alert(`Editing the event '${clickInfo.event.title}'`)
    }

    const renderEventContent = (eventInfo) => {
        // console.log(eventInfo)
        if (eventInfo.event.title !== undefined && eventInfo.event.title !== "") {
            return (
                <EventCard eventInfo={eventInfo}/>
            )
        } else {
            return (
                <EventCardNew eventInfo={eventInfo}/>
            )
        }
    }

    const ControlsSwitch = withStyles({
        switchBase: {
            color: grey[50],
            "&$checked": {
                color: grey[900],
            },
            "&$checked + $track": {
                backgroundColor: grey[500],
            },
        },
        checked: {},
        track: {},
    })(Switch);

    return (
        <div
            className="App"
            style={{
                height: "20vh",
                backgroundColor: LightTheme ? "white" : "#282c34",
                color: LightTheme ? "black" : "white",
                transition: "all 0.5s linear",
            }}
        >
            <Container
                maxWidth="xl"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "20vh",
                    justifyContent: "space-evenly",
                }}
            >
                {/*<Header*/}
                {/*    LightTheme={LightTheme}*/}
                {/*/>*/}
                {ShowControls && (
                    <div>
                <div
                    style={{position: "absolute", top: 0, right: 15, paddingTop: 10}}
                >
                <Grid container justifyContent="flex-end">
                    <span>{WeekendsVisible ? "Hide weekends" : "Show weekends"}</span>
                    <ControlsSwitch
                        checked={WeekendsVisible}
                        onChange={() => setWeekendsVisible(!WeekendsVisible)}
                    />
                    <span>{ShowSchedule ? "Calendar" : "Schedule"} View</span>
                    <ControlsSwitch
                        checked={ShowSchedule}
                        onChange={() => setShowSchedule(!ShowSchedule)}
                    />
                    <span>{LightTheme ? "Dark" : "Light"} Mode</span>
                    <ControlsSwitch
                        checked={LightTheme}
                        onChange={() => setLightTheme(!LightTheme)}
                    />
                        <span>{ShowFilters ? "Hide" : "Show"} Filters</span>
                        <ControlsSwitch
                            checked={ShowFilters}
                            onChange={() => setShowFilters(!ShowFilters)}
                        />
                </Grid>
                </div>
                    </div>
                )}

                <div style={{position: "absolute", top: 0, left: 15, paddingTop: 10}}>
                    <span>{ShowControls ? "Hide" : "Show"} Controls</span>
                    <ControlsSwitch
                        checked={ShowControls}
                        onChange={() => setShowControls(!ShowControls)}
                    />
                </div>
                <Grid container justifyContent="flex-start" alignItems="center">
                <div>
                    <div style={{ paddingBottom: 10, paddingTop: 50 }}>
                    <p style={{paddingBottom: 1, fontSize: 8}}>Drag & drop this block to create a new shift</p>
                    <p style={{paddingBottom: 1, fontSize: 8}}>Or click on a date in the calendar</p>
                    <CustomButton className="button-default" id="new-shift" variant="contained" color="primary"  endIcon={<DragIndicator/>}>
                        Add Shift
                    </CustomButton>
                </div>
                <div>
                    <CustomButton className="button-default"  variant="contained" color="primary" onClick={handleClickAdd}>
                        Add Shift or Appointment</CustomButton>
                    { open && <FormDialog setShowModal={setOpen}/>}
                </div>
                </div>
                {ShowFilters && (
                        <div>
                            THIS IS THE FILTERS SECTION
                        </div>
                )}
                </Grid>
            </Container>

            <div style={{margin: 20,
                backgroundColor: LightTheme ? "white" : "#282c34",
                color: LightTheme ? "black" : "white",
                transition: "all 0.5s linear",
            }}>
            {!ShowSchedule && (
                    <Calendar initialView="dayGridMonth" initialDate={new Date()} events={shifts} eventContent=""
                              weekendsVisible={WeekendsVisible} handleSelect={handleDateSelect}
                              eventClick={handleEventClick}/>
                )}
                {ShowSchedule && (
                    <Schedule initialView="resourceTimelineMonth" initialDate={new Date()} resources={staff}
                              events={shifts} eventContent={renderEventContent} weekendsVisible={WeekendsVisible}
                              handleSelect={handleDateSelect}  eventClick={handleEventClick} lightTheme={LightTheme}
                    />
                )}
            </div>
            <Footer/>
        </div>
    );
}

export default App;
