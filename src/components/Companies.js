import React, { useEffect } from "react"
import companyApi from "api/companyApi"
import Company from "components/Company"

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    }
}));

const Companies = () => {
    const classes = useStyles();
    const [companies, setCompanies] = React.useState([])
    const getCompanies = async () => {
        const result = await companyApi.getCompanies()
        setCompanies(result)
    }

    useEffect(() => {
        getCompanies()
    }, [])

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {companies && companies.map(company => (
                    <Company company={company} />
                ))}
            </Grid>
        </div>
    )
}

export default Companies