import reducer from './reducers'
const redux = require('redux')

const reducers = redux.combineReducers({
    changebackground: reducer
})

export default reducers

