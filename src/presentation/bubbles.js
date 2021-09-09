import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    circle: {
        position: 'relative',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "220px",
        height: '220px',
        borderRadius: '100%',
        marginTop: 80,
    }
}));

export function MakeMyBubble(props) {
    const classes = useStyles();

    return (
        <Grid item container xs direction={"column"} alignItems={"center"} spacing={2}>
            <Grid item xs>
                <div className={classes.circle} style={{backgroundColor: props.color}}>
                    <img height={190} src={props.img} alt={"img"}/>
                </div>
            </Grid>
            <Grid item xs>
                <Typography color={"Primary"} style={{textAlign: "center", fontSize: 23}}><b>{props.text}</b></Typography>
            </Grid>
        </Grid>
    );
}

function Bubble() {
    return (
        <div>
            <Grid container xs spacing={10}>
                <MakeMyBubble color={"#7BCED5"} img={"mannequin.png"} text={"Créez votre mannequin en 3D"}/>
                <MakeMyBubble color={"#272632"} img={"iconReftis.png"} text={"Essayez les vêtements sur votre mannequin"}/>
                <MakeMyBubble color={"#7BCED5"} img={"bag.png"} text={"Faites vos achats sans avoir de doutes sur la taille"}/>
                <MakeMyBubble color={"#272632"} img={"Logo_Reftis.png"} text={"Dîtes adieu au retour de vêtements !"}/>
            </Grid>
        </div>
    );
}

export default Bubble;