import Tabs from "../components/tabs";
import Grid from "@material-ui/core/Grid";
import {MyButton} from "../components/button";
import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    header: {
        width: theme.spacing("100%"),
        height: theme.spacing(55),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121218",
    },
}))

function Slogan() {
    return (
            <Grid item xs container direction={"column"}>
                <Grid item><Typography color={"textPrimary"} variant={"h1"}><b>ESSAYER</b></Typography></Grid>
                <Grid item><Typography color={"secondary"} variant={"h1"}><b>SANS</b></Typography></Grid>
                <Grid item><Typography color={"textSecondary"} variant={"h1"} style={{
                    textShadow: "2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff",
                }}><b>BOUGER</b></Typography></Grid>
            </Grid>
    )
}

function Slogan2() {
    return (
        <Grid item xs container direction={"column"}>
            <Grid item><Typography color={"secondary"} variant={"h2"}><b>Créer</b></Typography></Grid>
            <Grid item><Typography color={"textPrimary"} variant={"h3"}>votre mannequin</Typography></Grid>
            <Grid item><Typography color={"textPrimary"} variant={"h3"}>votre tenue</Typography></Grid>
            <Grid item><Typography color={"secondary"} variant={"h3"}><b>votre dressing</b></Typography></Grid>
        </Grid>
    );
}

function SloganButton() {
    return (
        <Grid item xs container direction={"column"} spacing={2}>
            <Slogan2/>
            <Grid item xs>
                <MyButton text={"Participer à la beta"}/>
            </Grid>
        </Grid>
    );
}

function Logo() {
    return (
        <Grid item xs>
            <img
                style={{
                    height: "100px",
                    width: "260px",
                    marginLeft: 20,
                }}
                src={"logoW.png"}
                alt={"Logo Reftis"}
            />
        </Grid>
    );
}

function Header(props) {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.header}>
                <Grid container xs spacing={5}>
                    <Logo/>
                    <Slogan/>
                    <SloganButton/>
                </Grid>
            </div>
        </div>
    );
}

export default Header;
