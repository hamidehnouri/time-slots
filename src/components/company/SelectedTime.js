import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import { Context } from "context/Provider"

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    }
}))

const SelectedTime = ({ companyIndex }) => {
    const classes = useStyles()
    const [state] = useContext(Context)
    const { selectedTimeSlots } = state
    const selectedTimeSlot = selectedTimeSlots[companyIndex]
    const reservedDate = selectedTimeSlot
        ? selectedTimeSlot.displayedName
        : "___"

    return (
        <Paper className={classes.paper}>
            <Typography variant={"subtitle2"}>Reservation</Typography>
            <Typography variant={"subtitle2"}>{reservedDate}</Typography>
        </Paper>
    )
}

export default SelectedTime
