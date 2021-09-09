import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Scrollspy from 'react-scrollspy'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    paper: {
        backgroundColor: "#121218",
        color: "white",
    },
    tabs: {
        backgroundColor: "#7BCED5",
        height: "7px",
        bottom: "2px"
    }
});

export default function CenteredTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.paper}>
            <Tabs
                TabIndicatorProps={{ className: classes.tabs }}
                value={value}
                onChange={handleChange}
                centered
            >
                <Tab label={props.i1} />
                <Tab label={props.i2} />
                <Tab label={props.i3} />
                <Tab label={props.i4} />
            </Tabs>
        </div>
    );
}