import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { fetchOneDrink } from '../reducers/drinkStore'
import { TextInput } from '../components/TextInput'
import {Comment} from '../components/Comment'

const Jumbotron = styled.div`
  background-color: #222;
  background-image: ${props=> props.backgroundImg ? `url(${props.backgroundImg})`: '#222'};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 50px;
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  p, h2 {
    color: white;
    text-shadow: 1px 1px black;
  }
`



export const DrinkDetail = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const drink = useSelector((state)=>state.drinkStore.selectedDrink)
  const comments = useSelector((state)=>state.commentStore.comments.filter((comment)=>comment.drink === id))
  const ingredients = [drink.strIngredient1, drink.strIngredient2, drink.strIngredient3]
  
  useEffect(()=>{
    dispatch(fetchOneDrink(id))
  },[])

  return(
    <div>
      {drink.strDrink && <div>
        <Jumbotron backgroundImg={drink.strDrinkThumb}>
          <h2>{drink.strDrink}</h2>
          {ingredients.map((ingredient)=>(<p>{ingredient}</p>))}
        </Jumbotron>
        <p>{drink.strInstructions}</p>
    
      </div>}
      <h5>Comments from users</h5>
      {comments && comments.map((comment)=>(<Comment key={comment.message} comment={comment} /> ))}
      <TextInput drinkId={id} />
    </div>
  )
}