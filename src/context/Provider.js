import { createContext, useReducer } from "react"
import reducer from "./reducer"

export const Context = createContext()

const initialState = {
    selectedTimeSlots: []
}

export default function Provider(props) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={[state, dispatch]}>
            {props.children}
        </Context.Provider>
    )
}
