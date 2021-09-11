import React from 'react'
import { Checkbox } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

function MyCheckbox(props) {
    const CustomCheckbox = withStyles({
        root: {
            color: props.color,
            '&$checked': {
                color: props.color,
            },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />);


    return (
        <CustomCheckbox indeterminate={props.value} onClick={props.onClick} checked={props.check} />
    )
}

export default MyCheckbox
