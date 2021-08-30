import React, { useContext } from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import { isAlreadySelected, isTimeSlotDisabled } from "common/utils"
import { Context } from "context/Provider"

const TimeSlot = ({ timeSlot, companyIndex }) => {
    const [state, dispatch] = useContext(Context)
    const { selectedTimeSlots } = state
    const selectedTimeSlot = selectedTimeSlots[companyIndex]
    const isSelected = isAlreadySelected(selectedTimeSlot, timeSlot)
    const isDisabled = isTimeSlotDisabled(
        selectedTimeSlots,
        timeSlot,
        companyIndex
    )

    const selectTimeSlots = () => {
        let selectedArray = selectedTimeSlots.slice()
        const selected = isAlreadySelected(selectedTimeSlot, timeSlot)
            ? null
            : timeSlot
        selectedArray[companyIndex] = selected
        dispatch({
            type: "SET_TIME_SLOTS",
            payload: selectedArray
        })
    }

    return (
        <React.Fragment>
            <ListItem
                button={true}
                selected={isSelected}
                disabled={isDisabled}
                onClick={() => selectTimeSlots()}
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
