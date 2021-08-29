import React from "react"
import Company from "components/company/Company"
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(3)
    },
}))

const Companies = ({ companies }) => {
    const classes = useStyles()
    const [selectedTimeSlots, setSelectedTimeSlots] = React.useState([])
    const selectTimeSlots = (index) => (timeSlot) => {
        let selectedArray = selectedTimeSlots.slice()
        selectedArray[index]=timeSlot
        setSelectedTimeSlots(selectedArray)
    }

    return (
        <Container className={classes.container}>
            <Grid container spacing={3}>
                {companies && companies.map((company, index) => (
                    <Company 
                    company={company} 
                    selectTimeSlots={selectTimeSlots(index)}
                    selectedTimeSlots={selectedTimeSlots}
                    key={`company_${company.name}`}
                    />
                ))}
            </Grid>
        </Container>
    )
}

export default Companies