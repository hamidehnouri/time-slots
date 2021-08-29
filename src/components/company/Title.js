import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
}))

const Title = ({ title }) => {
    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <Typography variant={"body1"}>
                {title}
            </Typography>
        </Paper>
    )
}

export default Title