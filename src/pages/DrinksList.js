import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { fetchDrinks } from '../reducers/drinkStore'
import { DrinkCard } from '../components/DrinkCard'

export const DrinksList = () => {
  const drinks = useSelector((state)=>state.drinkStore.drinkList)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchDrinks())
  },[])
  return(
    <div>
      <h2>Drink List</h2>
      <div className="row">
        {drinks && drinks.map((drink)=>(
          <DrinkCard drink={drink} />
        ))}
      </div>
    </div>
  )
}