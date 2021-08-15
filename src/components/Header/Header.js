import {createTheme, ThemeProvider} from "@material-ui/core";
import React from "react";
import "./Header.css";


const Header = ({
                  word,
                  LightTheme,
                }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: LightTheme ? "#000" : "#fff",
      },
      type: LightTheme ? "light" : "dark",
    },
  });


  return (
      <div className="header">
        <span className="title">{word ? word : "Roster"}</span>
          <ThemeProvider theme={darkTheme}>
            <a href="https://fullcalendar.io/" target="_blank" rel="noreferrer">Fullcalendar prototype</a>
          </ThemeProvider>
      </div>
  );
};

export default Header;
