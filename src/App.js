import {Container, Switch, withStyles, Button} from "@material-ui/core";
import {DragIndicator} from '@material-ui/icons';
import {grey} from "@material-ui/core/colors";
import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Header/Header";
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



function App() {
    const [LightTheme, setLightTheme] = useState(true);
    const [ShowSchedule, setShowSchedule] = useState(true);
    const [WeekendsVisible, setWeekendsVisible] = useState(false);
    const [ShowFilters, setShowFilters] = useState(true);
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
                maxWidth="lg"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "20vh",
                    justifyContent: "space-evenly",
                }}
            >
                <Header
                    LightTheme={LightTheme}
                />
                <div
                    style={{position: "absolute", top: 0, left: 15, paddingTop: 10}}
                >
                    <span>{ShowFilters ? "Hide" : "Show"} Filters</span>
                    <ControlsSwitch
                        checked={ShowFilters}
                        onChange={() => setShowFilters(!ShowFilters)}
                    />
                </div>
                {ShowFilters && (
                    <div>
                <div
                    style={{position: "absolute", top: 0, right: 15, paddingTop: 10}}
                >
                    <span>{LightTheme ? "Dark" : "Light"} Mode</span>
                    <ControlsSwitch
                        checked={LightTheme}
                        onChange={() => setLightTheme(!LightTheme)}
                    />
                </div>
                <div
                    style={{position: "absolute", top: 30, right: 15, paddingTop: 10}}
                >
                    <span>{ShowSchedule ? "Calendar" : "Schedule"} View</span>
                    <ControlsSwitch
                        checked={ShowSchedule}
                        onChange={() => setShowSchedule(!ShowSchedule)}
                    />
                </div>
                <div style={{position: "absolute", top: 60, right: 15, paddingTop: 10}}
                >
                    <span>{WeekendsVisible ? "Hide weekends" : "Show weekends"} View</span>
                    <ControlsSwitch
                        checked={WeekendsVisible}
                        onChange={() => setWeekendsVisible(!WeekendsVisible)}
                    />
                </div>
                    </div> )}
                <div style={{left: 60, paddingBottom: 10}}>
                    <p style={{paddingBottom: 1, fontSize: 8}}>Drag & drop this block to create a new shift</p>
                    <p style={{paddingBottom: 1, fontSize: 8}}>Or click on a date in the calendar</p>
                    <Button className="button-default" id="new-shift" variant="contained" color="primary"  endIcon={<DragIndicator/>}>
                        Add Shift
                    </Button>
                </div>
                <div>
                    <Button className="button-default" variant="contained" color="primary" onClick={toggle}>
                        Add Shift or Appointment</Button>
                    { open && <FormDialog setShowModal={setOpen}/>}
                </div>
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
