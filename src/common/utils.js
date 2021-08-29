import moment from 'moment'
import orderBy from "lodash/orderBy"
import groupBy from "lodash/groupBy"

//Week days
export const WEEKDAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
]

export const timeSlotsFormatter = (timeSlots) => {
    return timeSlots.map((timeSlot, index) => ({
        ...timeSlot,
        index,
        dayOfWeek: moment(timeSlot.start_time).isoWeekday(),
        formattedStartTime: moment(timeSlot.start_time).format('LLL'),
        formattedEndTime: moment(timeSlot.end_time).format('LLL'),
        displayedName: makeTimeSlotDisplayedName(timeSlot)
    }))
}

export const makeTimeSlotDisplayedName = (timeSlot) => {
    const startTime = moment(timeSlot.start_time)
    const endTime = moment(timeSlot.end_time)
    const displayedName = startTime.diff(endTime, "days") === 0 ?
        `${startTime.format('LLL')} - ${endTime.format('LT')}` :
        `${startTime.format('LLL')} - ${endTime.format('LLL')}`
    return displayedName
}

export const groupTimeSlots = (timeSlots) => {
    const orderedTimeSlots = orderBy(timeSlots, function (o) {
        return new moment(o.end_time)
    }, ['asc'])
    return groupBy(orderedTimeSlots, "dayOfWeek")
}

export const isAlreadySelected = (selectedTimeSlot, timeSlot) => {
    return selectedTimeSlot && (timeSlot.index === selectedTimeSlot.index)
}