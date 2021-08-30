export default function reducer(state, action) {
    switch (action.type) {
        case "SET_TIME_SLOTS":
            return {
                selectedTimeSlots: action.payload
            }
        default:
            throw new Error()
    }
}
