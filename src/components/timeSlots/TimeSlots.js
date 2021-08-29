import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import { timeSlotsFormatter, groupTimeSlots } from "common/utils"
import WeekDays from './WeekDays'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}))

const TimeSlots = (props) => {
    const classes = useStyles()
    const timeSlots = timeSlotsFormatter(props.timeSlots)
    const weekDays = groupTimeSlots(timeSlots)

    return (
        <Paper className={classes.paper}>
            <Grid container spacing={3}>
                <List className={classes.root} subheader={<li />}>
                    <WeekDays
                        weekDays={weekDays}
                        selectTimeSlot={props.selectTimeSlot}
                        selectedTimeSlot={props.selectedTimeSlot}
                    />
                </List>
            </Grid>
        </Paper>
    )
}

export default TimeSlots