import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import {MyButton} from "../components/button";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 250,
        width: theme.spacing("100%"),
        height: theme.spacing(95),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#394954",
    },
    paper: {
        backgroundColor: "#272632",
        padding: 30,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        width: "60%",
        maxWidth: 600
    },
    inputPaper: {
        backgroundColor: "#3E3D4A",
        padding: 1
    },
    form: {
        '& > *': {
            margin: theme.spacing(1),
            width: '96%'
        },
    },
}))

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#7BCED5',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: "#7BCED5"
            }
        },
    }
})(TextField);

function MakeMyField(props) {
    const classes = useStyles()
    return (
        <Paper className={classes.inputPaper} elevation={5}>
            <CssTextField
                fullWidth
                color={"secondary"}
                label={props.label}
                variant="outlined"
                id={props.id}
            />
        </Paper>
    );
}

function Newsletter() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={5}>
                <Typography color={"secondary"} style={{fontWeight: "bold",}} variant={"h1"}>Newsletter</Typography>
                <Typography>Abonnez vous pour vous tenir informer du développement de l'application et en savoir plus sur son fonctionnement</Typography>
                <form className={classes.form}>
                    <Grid container xs spacing={3}>
                        <Grid item xs={12}>
                            <MakeMyField label={"Email"} id={"email"}/>
                        </Grid>
                        <Grid item xs={6}>
                            <MakeMyField label={"Prénom"} id={"fname"}/>
                        </Grid>
                        <Grid item xs={6}>
                            <MakeMyField label={"Nom"} id={"lname"}/>
                        </Grid>
                        <Grid item xs={12}>
                            <MakeMyField label={"Date de naissance"} id={"bdate"}/>
                        </Grid>
                        <Grid item xs={12}>
                            <MakeMyField label={"Adresse"} id={"location"}/>
                        </Grid>
                        <Grid item xs={12}>
                            <MyButton text={"S'abonner"}/>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </div>
    );
}

export default Newsletter;