import React from "react";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import Header from "./presentation/header";
import Bubble from "./presentation/bubbles";
import {Team} from "./presentation/team";
import Description from "./presentation/description";
import Newsletter from "./presentation/newsletter";
import ScrollSpyTabs from "./components/scrollSpyTabs";

const theme = createMuiTheme({
    palette: {
        primary: {main: "#56565A"},
        secondary: {main: "#7BCED5"},
        text: {
            primary: "#FFFFFF",
            secondary: "#292B38"
        },
    },
    overrides: {
        MuiFormLabel: {
            root: {
                color: "#7BCED5"
            }
        }
    },
    typography: {
        h1: {
            fontSize: '4rem',
            '@media (min-width:600px)': {
                fontSize: '4rem',
            },
            '@media (min-width:650px)': {
                fontSize: '2.8rem',
            },
            '@media (min-width:850px)': {
                fontSize: '4rem',
            },
            '@media (min-width:1000px)': {
                fontSize: '4.7rem',
            },
            '@media (min-width:1400px)': {
                fontSize: '5.8rem',
            },
        },
        h3: {
            fontSize: '1.5rem',
            '@media (min-width:630px)': {
                fontSize: '1.5rem',
            },
            '@media (min-width:700px)': {
                fontSize: '1.3rem',
            },
            '@media (min-width:1000px)': {
                fontSize: '1.8rem',
            },
            '@media (min-width:1400px)': {
                fontSize: '2.7rem',
            },
        }
    }
});

function Presentation() {
    return (
        <div>
            <Header/>
            <Bubble/>
            <Description/>
        </div>
    )
}

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <ScrollSpyTabs
                    tabsInScroll={[
                        {
                            text: "présentation",
                            component: <Presentation/>
                        },
                        {
                            text: "Equipe",
                            component: <Team/>
                        },
                        {
                            text: 'Newsletter',
                            component: <Newsletter/>
                        }
                    ]}
                />
            </div>
        </MuiThemeProvider>
    );
}

export default App;
