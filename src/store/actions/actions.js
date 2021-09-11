import ACTIONS from "../constants/constants"

export default function changeBackground(value){
    return{
        type: ACTIONS.CHANGE_BACKGROUND,
        payload: value
    }
}

