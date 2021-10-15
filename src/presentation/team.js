import {MakeMyBubble} from './bubbles'
import React from "react";
import Grid from "@material-ui/core/Grid";

export const Team = () => {
    return (
        <div>
            <Grid container xs direction={"row"} spacing={2}>
                <Grid item container direction={"column"} xs={4}>
                    <MakeMyBubble color={"#121218"} img={""} text={"Rafaël Marques"}/>
                    <MakeMyBubble color={"#121218"} img={""} text={"Thomas Kemkemian"}/>
                </Grid>
                <Grid item container direction={"column"} xs={4}>
                    <MakeMyBubble color={"#121218"} img={""} text={"Elias Benzaoui"}/>
                    <MakeMyBubble color={"#121218"} img={""} text={"Lucas Zarka"}/>
                </Grid>
                <Grid item container direction={"column"} xs={4}>
                    <MakeMyBubble color={"#121218"} img={""} text={"Nicolas Jean"}/>
                    <MakeMyBubble color={"#121218"} img={""} text={"Maxime Wang"}/>
                </Grid>
            </Grid>
        </div>
    )
}