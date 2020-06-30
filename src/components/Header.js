import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Title = styled(Link)`
  font-size: 3em;
  color: teal;
  width: 100%;
  text-align: center;
  cursor: pointer;
`


export const Header = () => {
  return(
    <div className="row">
      <Title to="/">Drink App</Title>
    </div>
    
  )
}