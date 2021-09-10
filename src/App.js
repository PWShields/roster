import {Container, Switch, withStyles} from "@material-ui/core";
import {DragIndicator} from '@material-ui/icons';
import {grey} from "@material-ui/core/colors";
import React, {useState, useEffect} from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Calendar from "./components/Calendar/Calendar";
import Schedule from "./components/Schedule/Schedule";
import MockDataService from './services/mockDataService';
import {Draggable} from '@fullcalendar/interaction';
import {createEventId} from './utilities/event-utils'
import EventCard from "./components/Event/EventCard";
import EventCardNew from "./components/Event/EventCardNew";
import AddEventDialog from "./components/AddEvent/AddEventDialog";
import Grid from "@material-ui/core/Grid";
import CustomButton from "./components/Widgets/CustomButton";
import LegendCard from "./components/Widgets/LegendCard";
import FiltersDialog from "./components/Filters/FiltersDialog";
import FilterPanel from "./components/Filters/FilterPanel";



function App() {
    const [LightTheme, setLightTheme] = useState(true);
    const [ShowSchedule, setShowSchedule] = useState(true);
    const [WeekendsVisible, setWeekendsVisible] = useState(false);
    const [ShowFilters, setShowFilters] = useState(false);
    const [ShowFilterPanel, setShowFilterPanel] = useState(false);
    const [ShowControls, setShowControls] = useState(true);
    const [SelectedDate, setSelectedDate] = useState('');
    const [open, setOpen] = useState(false);
    const [shifts, setShifts] = useState([])
    const [staff, setStaff] = useState([])
    const defaultFilterValues = {
        participant: "",
        location: "",
        role: "",
        staff: "",
        bookingNote: "",
        billable: "",
        type: ""
    }
    const [filterValues, setFilterValues] = useState(defaultFilterValues)

    const mockDataService = MockDataService();

    useEffect(() => {
        let draggableEl = document.getElementById('new-shift');
            new Draggable(draggableEl);
    });

    useEffect(() =>{
        setShifts(mockDataService.shifts)
        setStaff(mockDataService.filterStaff(filterValues.staff))
    },[filterValues]);

    const clearFilters = () => {
        setFilterValues(defaultFilterValues)
        setShowFilterPanel(false)
    }

    const handleDateSelect = (selectInfo) => {
        setSelectedDate(selectInfo)
        handleClickAdd()
    }

    const handleFilterChange = (newFilters) =>{
        setFilterValues(newFilters)
        if(true) {
            setShowFilterPanel(true)
        } else {
            setShowFilterPanel(false)
        }
    };


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


    const handleEventClick = (clickInfo) => {
        alert(`Editing the event '${clickInfo.event.title}'`)
    }

    const renderEventContent = (eventInfo) => {
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


    function clearOneFilter( filterName) {
        let newFilters = filterValues
        console.log("Clear "+filterName)
        for(let i = 0, size = newFilters.length; i < size ; i++){
            let item = newFilters[i];
            console.log("item "+item)
            if(filterName === (item)){

                item = ""
            }
        }
        setFilterValues(newFilters)
    }

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
                <div>
                    <div style={{ paddingBottom: 1, paddingTop: 110 }}>
                        <p style={{paddingBottom: 1, fontSize: 8}}>Drag & drop this block to create a new shift</p>
                    <p style={{paddingBottom: 1, fontSize: 8}}>Or click on a date in the calendar</p>
                        <Grid container direction= "row" alignContent="center"  alignItems="center">
                            <Grid item xs>
                                <CustomButton className="button-default" id="new-shift" variant="contained" color="primary"  endIcon={<DragIndicator/>}>
                                    Add Shift
                                </CustomButton>
                            </Grid>
                            <Grid item xs={10}>
                                <div>
                                    {ShowFilterPanel && <FilterPanel filters={filterValues} saveFilterChange={handleFilterChange}/>}
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                <div>
                    {/*<CustomButton className="button-default"  variant="contained" color="primary" onClick={handleClickAdd}>*/}
                {/*        Add Shift or Appointment</CustomButton>*/}
                    { open && <AddEventDialog setShowModal={setOpen} selectedData={SelectedDate}/>}
                </div>
                    <div>
                        { ShowFilters && <FiltersDialog setShowModal={setShowFilters} existingValues={filterValues}
                                                        setFilters={handleFilterChange}/>}
                    </div>
                </div>
                <Grid container justifyContent="flex-end" alignItems="center">
                <LegendCard />
                </Grid>
            </Container>

            <div style={{margin: 20,
                backgroundColor: LightTheme ? "white" : "#282c34",
                color: LightTheme ? "black" : "white",
                transition: "all 0.5s linear",
            }}>
            {!ShowSchedule && (
                    <Calendar initialView="dayGridMonth" initialDate={new Date()} events={shifts}
                              weekendsVisible={WeekendsVisible} handleSelect={handleDateSelect}
                              eventClick={handleEventClick} showFilters={setShowFilters}/>
                )}
                {ShowSchedule && (
                    <Schedule initialView="resourceTimelineMonth" initialDate={new Date()} resources={staff}
                              events={shifts} eventContent={renderEventContent} weekendsVisible={WeekendsVisible}
                              handleSelect={handleDateSelect}  eventClick={handleEventClick} lightTheme={LightTheme}
                              showFilters={setShowFilters} clearFilters={clearFilters}
                    />
                )}
            </div>
            <Footer/>
        </div>
    );
}

export default App;
