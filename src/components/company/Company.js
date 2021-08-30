import React from "react"
import Grid from "@material-ui/core/Grid"
import Title from "./Title"
import SelectedTime from "./SelectedTime"
import TimeSlots from "components/timeSlots/TimeSlots"

const Company = ({ company, companyIndex }) => {
    return (
        <Grid item container xs={4} spacing={3}>
            <Grid item xs={12}>
                <Title title={company.name} />
            </Grid>
            <Grid item xs={12}>
                <SelectedTime companyIndex={companyIndex} />
            </Grid>
            <Grid item xs={12}>
                <TimeSlots
                    timeSlots={company.time_slots}
                    companyIndex={companyIndex}
                />
            </Grid>
        </Grid>
    )
}

export default Company
