import React from "react"
import ReactDOM from "react-dom"
import '@fontsource/roboto'
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { theme } from "styles/Mui"
import { ThemeProvider } from "@material-ui/core/styles"
import Provider from "context/Provider"

ReactDOM.render(
    <React.StrictMode>
        <Provider>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
)

reportWebVitals()
