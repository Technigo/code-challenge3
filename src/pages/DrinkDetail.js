import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { fetchOneDrink } from '../reducers/drinkStore'

const Jumbotron = styled.div`
  background: ${props=> props.backgroundImg ? `url(${props.backgroundImg})`: '#222'};
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`



export const DrinkDetail = () => {
  const {id} = useParams()
  const drink = useSelector((state)=>state.drinkStore.selectedDrink)
  const ingredients = [drink.strIngredient1, drink.strIngredient2, drink.strIngredient3]
  console.log(ingredients)
  const dispatch = useDispatch()
  console.log('drink', drink)
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
    
    </div>
    }
    <p>drink detail {id}</p>
     </div>
  )
}