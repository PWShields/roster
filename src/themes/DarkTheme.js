import {createTheme} from "@material-ui/core";

export const DarkTheme = (({
                               LightTheme,
                           }) => {
    createTheme({
        palette: {
            primary: {
                main: LightTheme ? "#000" : "#fff",
            },
            type: LightTheme ? "light" : "dark",
        },
    })
})
