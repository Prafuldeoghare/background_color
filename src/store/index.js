const redux = require('redux')

const initialState= {
    button: [{variant: 'contained',hexname:'#5E4FDB', bg:'#5E4FDB', color: '#ffffff', borderC:'none'},{variant: 'outlined', hexname:'#F3F2FC' ,bg:'none', color: '#F3F2FC', borderC:'#F3F2FC'},{variant: 'none', color:'#1ABC9C',hexname:'#1ABC9C', bg: 'none', borderC:'none'}],
    checkbox: ['#852121','#FEE3E3','#C06801','#000000','#808080','#D8D8D8','#F0F0F0','#F6F6F6'],
    switch: ['#0E4316', '#FFF7E3', '#E1EFE1'],
    name:'',
    color:''
}

const reducer = (state=initialState, action ) => {
    switch(action.type){
        case 'changeBackground': 
         return{
            ...state,
            color: action.payload
         }
         default : return state
    }
}


const store= redux.createStore(reducer)

export default store