import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import React from "react";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#7BCED5",
        color: "white",
        height: 50,
        padding: '30px',
        '&:hover': {
            backgroundColor: "#272632"
        },
    }
})

export const MyButton = (props) => {
    const classes = useStyles();
    return <Button className={classes.root}><b>{props.text}</b></Button>;
};