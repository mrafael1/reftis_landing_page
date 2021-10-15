import Grid from "@material-ui/core/Grid";
import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    left: {
        height: theme.spacing(40),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#7BCED5",
        marginTop: 80,
        marginLeft: "15%"
    },
    right: {
        height: theme.spacing(40),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#272632",
        marginTop: 80,
        marginRight: "15%"
    },
    text: {
        marginTop: 80,
        marginLeft: "30%",
        marginRight: "30%",
    }
}))

function Description() {
    const classes = useStyles();

    return (
        <div>
            <Grid container xs={12} alignItems={"center"}>
                <Grid item xs={5}>
                    <div className={classes.left}>
                        <Grid item container xs direction={"column"} alignItems={"center"} spacing={2}>
                            <Typography color={"textSecondary"} style={{fontSize: 120}}><b>66%</b></Typography>
                            <Typography color={"textSecondary"} style={{textAlign: "center", fontSize: 23}}>du marché en
                                ligne représente les vêtements</Typography>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <Typography color={"Primary"} style={{textAlign: "center", justifyContent: "center", fontSize: 23}}><b>Dont</b></Typography>
                </Grid>
                <Grid item xs={5}>
                    <div className={classes.right}>
                        <Grid item container xs direction={"column"} alignItems={"center"} spacing={2}>
                            <Typography color={"textPrimary"} style={{fontSize: 120}}><b>1/4</b></Typography>
                            <Typography color={"textPrimary"} style={{textAlign: "center", fontSize: 23}}>de retour
                                après commande en raison d'une mauvaise taille</Typography>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
            <div className={classes.text}>
                <Grid container alignItems={"center"} xs={12}>
                    <Grid item xs={12}>
                        <Typography color={"textSecondary"} style={{textAlign: "justify", fontSize: 23}}>
                            Reftis vous permet de pouvoir créer un mannequin en 3 dimensions correspondant à vos
                            propres
                            mensurations.</Typography>
                        <Typography color={"textSecondary"} style={{textAlign: "justify", fontSize: 23}}> Essayer
                            des
                            vêtements en ligne devient alors possible!</Typography>
                        <Typography color={"textSecondary"} style={{textAlign: "justify", fontSize: 23}}>Fini le
                            retour
                            de
                            vêtement intempestif pour cause de taille trop grande ou trop petite. Assurer vous que
                            le
                            vêtement est à votre taille avant même de l'acheter.</Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Description;