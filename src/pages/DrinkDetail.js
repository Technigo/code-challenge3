import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOneDrink } from '../reducers/drinkStore'

export const DrinkDetail = () => {
  const {id} = useParams()
  const drink = useSelector((state)=>state.drinkStore.selectedDrink)
  const dispatch = useDispatch()
  console.log('drink', drink)
  useEffect(()=>{
    dispatch(fetchOneDrink(id))
  },[])

  return(
    <div>
    {drink.strDrink && <h2>{drink.strDrink}</h2>}
    <p>drink detail {id}</p>
     </div>
  )
}