import React from 'react'
import  Switch  from '@material-ui/core/Switch'
import { withStyles } from '@material-ui/styles';

function MySwitch(props) {
    const CustomSwitch = withStyles({
        switchBase: {
          color: props.color,
          '&$checked': {
            color: props.color,
          },
          '&$checked + $track': {
            backgroundColor: props.color,
          },
        },
        checked: {},
        track: {},
      })(Switch);

    return (
            <CustomSwitch
                checked={props.checked}
                onChange={props.handleChange}  
                name="custom switch"
            />
        // {/* </div> */}
    )
}

export default MySwitch
