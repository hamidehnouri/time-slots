import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}))

const SelectedTime = ({ selectedTimeSlot}) => {
    const classes = useStyles()
    const reservedDate = selectedTimeSlot ? selectedTimeSlot.displayedName : "No date is selected!"
    return (
        <Paper className={classes.paper}>{reservedDate}</Paper>
    )
}

export default SelectedTime