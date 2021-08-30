import React from "react"
import Company from "components/company/Company"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(3)
    }
}))

const Companies = ({ companies }) => {
    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <Grid container spacing={3}>
                {companies &&
                    companies.map((company, index) => (
                        <Company
                            company={company}
                            companyIndex={index}
                            key={company.id}
                        />
                    ))}
            </Grid>
        </Container>
    )
}

export default Companies
