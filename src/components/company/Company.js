import React from "react"
import Grid from '@material-ui/core/Grid'
import Title from './Title'
import SelectedTime from './SelectedTime'
import TimeSlots from 'components/timeSlots/TimeSlots'
import { isAlreadySelected } from "common/utils"

const Company = ({ company, selectTimeSlots, selectedTimeSlots }) => {
    const [selectedTimeSlot, setSelectedTimeSlot] = React.useState(null)
    const selectTimeSlot = (timeSlot) => {
        const selected = isAlreadySelected(selectedTimeSlot, timeSlot) ? null : timeSlot
        setSelectedTimeSlot(selected)
        selectTimeSlots(selected)
    }

    return (
        <Grid item container xs={4} spacing={3}>
            <Grid item xs={12}>
                <Title title={company.name} />
            </Grid>
            <Grid item xs={12}>
                <SelectedTime selectedTimeSlot={selectedTimeSlot} />
            </Grid>
            <Grid item xs={12}>
                <TimeSlots
                    timeSlots={company.time_slots}
                    selectTimeSlot={selectTimeSlot}
                    selectedTimeSlot={selectedTimeSlot}
                />
            </Grid>
        </Grid>
    )
}

export default Company