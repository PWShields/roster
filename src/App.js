import {Container, Switch, withStyles} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {useState} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Calendar from "./components/Calendar/Calendar";
import Schedule from "./components/Schedule/Schedule";
import staff from "./data/staff";
import shifts from "./data/shifts";


function App() {
    const [LightTheme, setLightTheme] = useState(false);
    const [ShowSchedule, setShowSchedule] = useState(false);
    const [WeekendsVisible, setWeekendsVisible] = useState(true);


    const handleWeekendsToggle = () => {
            setWeekendsVisible(!WeekendsVisible)
    }

    const StyleSwitch = withStyles({
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

    const CalendarSwitch = withStyles({
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
                height: "100vh",
                backgroundColor: LightTheme ? "#a7c9e8" : "#282c34",
                color: LightTheme ? "black" : "white",
                transition: "all 0.5s linear",
            }}
        >
            <Container
                // maxWidth="md"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                    justifyContent: "space-evenly",
                }}
            >
                <div
                    style={{position: "absolute", top: 0, right: 15, paddingTop: 10}}
                >
                    <span>{LightTheme ? "Dark" : "Light"} Mode</span>
                    <StyleSwitch
                        checked={LightTheme}
                        onChange={() => setLightTheme(!LightTheme)}
                    />
                </div>
                <div
                    style={{position: "absolute", top: 30, right: 15, paddingTop: 10}}
                >
                    <span>{ShowSchedule ? "Calendar" : "Schedule"} View</span>
                    <CalendarSwitch
                        checked={ShowSchedule}
                        onChange={() => setShowSchedule(!ShowSchedule)}
                    />
                </div>
                <Header
                    LightTheme={LightTheme}
                />
                <div   style={{position: "absolute", top: 60, right: 30, paddingTop: 10}}
                >
                    <FormGroup row>
                        <FormControlLabel
                            label="toggle weekends"
                            labelPlacement="start"
                            control={
                                <Checkbox
                                    onChange={handleWeekendsToggle}
                                    name="weekends"
                                    color="primary"
                                />
                            }
                        />
                    </FormGroup>
                </div>
                {!ShowSchedule && (
              <Calendar initialView ="dayGridMonth" initialDate = {new Date()} events = {shifts} eventContent="" weekendsVisible={WeekendsVisible} />
                )}
                {ShowSchedule && (
                <Schedule initialView ="resourceTimelineDay" initialDate = {new Date()} resources = {staff} events = {shifts} eventContent="" weekendsVisible={WeekendsVisible} />
                )}
                </Container>
            <Footer/>
        </div>
            );
}

export default App;
