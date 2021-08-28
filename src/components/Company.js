import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Company = ({ company }) => {
    const classes = useStyles();
    const timeSlots = company.time_slots

    return (
        <Grid item xs={4}>
            <Paper className={classes.paper}>{company.name}</Paper>
            {
                timeSlots.map(time=>(
                    <Paper className={classes.paper}>{time.start_time} {time.end_time}</Paper>
                ))
            }
        </Grid>
    )

}

export default Company