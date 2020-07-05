import React, {useState} from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import {commentStore} from '../reducers/commentStore'

const Form = styled.form`
  border: 1px solid gray;
  width: fit-content;
  max-width: 100%;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  label {
    font-size: 1.5em;

  }
  button {
    margin: 20px 0;
    background-color: indigo;
    color: white;
  }
`


export const TextInput = ({drinkId}) => {
  const [text, setText] = useState()
  const dispatch = useDispatch()

  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(commentStore.actions.addingComment({message:text, drink:drinkId}));
    setText('')
  }  
  return(
    <Form onSubmit={handleSubmit}>
        <label htmlFor="inputText">New Comment</label>
        <textarea id="inputText" value={text} onChange={(e)=>setText(e.target.value)} />
        <button type="submit" className="btn">Submit</button>
    </Form>
    
  )
}