import React from "react"
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { isAlreadySelected } from "common/utils"

const TimeSlot = ({ timeSlot, selectTimeSlot, selectedTimeSlot }) => {
    const isSelected = isAlreadySelected(selectedTimeSlot, timeSlot)

    return (
        <React.Fragment>
            <ListItem
                button={true}
                selected={isSelected}
                onClick={() => selectTimeSlot(timeSlot)}
            >
                <ListItemText
                    primary={timeSlot.displayedName}
                    primaryTypographyProps={{ variant: "subtitle2" }}
                />
            </ListItem>
            <Divider />
        </React.Fragment>
    )
}

export default TimeSlot