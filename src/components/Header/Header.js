import {createTheme, TextField, ThemeProvider} from "@material-ui/core";
import React from "react";
import "./Header.css";
import {debounce} from "lodash";


const Header = ({
                  category,
                  setCategory,
                  setWord,
                  word,
                  setMeanings,
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

  const handleChange = (e) => {
    setCategory(e.target.value);
    setWord("");
    setMeanings([]);
  };

  const handleText = debounce((text) => {
    // setWord(text);
  }, 500);

  return (
      <div className="header">
        <span className="title">{word ? word : "Roster"}</span>
        <div className="inputs">
          <ThemeProvider theme={darkTheme}>

          </ThemeProvider>
        </div>
      </div>
  );
};

export default Header;
