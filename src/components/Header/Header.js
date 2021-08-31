import {ThemeProvider} from "@material-ui/core";
import React from "react";
import "./Header.css";
import {DarkTheme} from "../../themes/DarkTheme";


const Header = ({
                  word,
                  LightTheme,
                }) => {

const theme = DarkTheme(LightTheme)

  return (
      <div className="header">
        <span className="title">{word ? word : "Roster"}</span>
          <ThemeProvider theme={theme}>
            <a href="https://fullcalendar.io/" target="_blank" rel="noreferrer">Fullcalendar prototype</a>
          </ThemeProvider>
      </div>
  );
};

export default Header;
