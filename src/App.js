import React from 'react'
import MyButton from './components/button'
import MyCheckbox from './components/checkbox'
import MySwitch from './components/switch'
import changeBackground from './store/actions/actions'
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components'

function App() {
  const button = useSelector(state => state.changebackground.button)
  const checkbox = useSelector(state => state.changebackground.checkbox)
  const toggle = useSelector(state => state.changebackground.switch)
  const background = useSelector(state => state.changebackground.color)
  const dispatch = useDispatch()

  const Container = styled.div`
      background-color: ${props => props.background};
      height: 100vh;
      width: 100vw;
      display: flex;
      justify-content : center;
      align-items: center;
  `;

  const Wrapper = styled.div`
      width: 25%;
      background-color: #ffffff;
      padding: 10px 20px;
      border-radius: 10px; 
      box-shadow: 2px 10px 41px -5px rgba(0,0,0,0.75);
  `;

  const Text = styled.h4`
      color: #111111;
      font-family: 'Roboto', sans-serif;
  `; 


  const handleClick = (value) =>{
    console.log(background)
     if(background !== value)
        dispatch(changeBackground(value))   
      else{  
        dispatch(changeBackground('#ffffff'))
      }
  }
  const handleCheck = (hex) => {
      if(background === hex)
        return true
      else
        return false
  }


  return (
    <Container background={background}>
      <Wrapper>
        <Text>Change Background</Text>
        {button.map( button => {
            return(
              <MyButton key={button.color} variant={button.variant} bg={button.bg} color={button.color} bordercolor={button.borderC} hexname={button.hexname} onClick={(e)=>handleClick(button.hexname)}/>
            )
          })}
          {checkbox.map( (checkbox, index) => {
              if(index %2 == 0){
                return(
                  <MyCheckbox key={checkbox} color={checkbox} value={true} onClick = {(e)=>handleClick(checkbox)} check = {handleCheck(checkbox)}/>
                )
              }else{
                return(
                  <MyCheckbox key={checkbox} color={checkbox} value={false} onClick = {(e)=>handleClick(checkbox)} check = {handleCheck(checkbox)}/>
                )
              }
            })}
          {toggle.map( toggle => {
            return(
              <MySwitch key={toggle} color={toggle} handleChange={(e)=>handleClick(toggle)} checked={handleCheck(toggle)}/>
            )
          })}
        </Wrapper>
    </Container>
  )
}

export default App
    