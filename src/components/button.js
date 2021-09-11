import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'

function MyButton(props) {
    const useStyles = makeStyles(theme => ({
        button: {
            color: props.color,
            backgroundColor: props.bg,
            borderColor: props.bordercolor,
            margin: '10px'
        }
    }))

    return (
        <Button variant={props.variant} className={useStyles().button} onClick={props.onClick} >{props.hexname}</Button>
    )
}

export default MyButton
