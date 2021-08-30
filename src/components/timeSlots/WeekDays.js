import React from "react"
import TimeSlot from "./TimeSlot"
import { makeStyles } from "@material-ui/core/styles"
import DayTitle from "./DayTitle"

const useStyles = makeStyles((theme) => ({
    listSection: {
        backgroundColor: "inherit"
    },
    ul: {
        backgroundColor: "inherit",
        padding: 0
    }
}))

const WeekDays = ({ weekDays, companyIndex }) => {
    const classes = useStyles()
    const daysOfWeek = Object.keys(weekDays)

    return daysOfWeek.map((day) => (
        <li key={`day_${day}`} className={classes.listSection}>
            <ul className={classes.ul}>
                <DayTitle day={day} />
                {weekDays[day].map((timeSlot, index) => (
                    <TimeSlot
                        timeSlot={timeSlot}
                        companyIndex={companyIndex}
                        key={`date_${day}_${index}`}
                    />
                ))}
            </ul>
        </li>
    ))
}

export default WeekDays
