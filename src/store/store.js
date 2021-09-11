import reducers from './reducers/index'
const redux= require('redux')

const store= redux.createStore(reducers)

export default store