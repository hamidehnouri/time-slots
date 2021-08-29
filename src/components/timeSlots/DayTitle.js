import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import Typography from '@material-ui/core/Typography'

import { WEEKDAYS } from "common/utils"

const useStyles = makeStyles((theme) => ({
    listSubheader: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        padding: theme.spacing(2)
    }
}))

const DayTitle = ({ day }) => {
    const classes = useStyles()
    const title = WEEKDAYS[day - 1]

    return (
        <ListSubheader className={classes.listSubheader}>
            <Typography variant="body1">
                {title}
            </Typography>
        </ListSubheader>
    )
}

export default DayTitle