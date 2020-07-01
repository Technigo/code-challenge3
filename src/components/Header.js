import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Title = styled(Link)`
  font-size: 2.5em;
  color: #3d82ab;
  width: 100%;
  text-align: center;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`


export const Header = () => {
  return(
    <div className="row">
      <Title to="/">Drink App</Title>
    </div>
    
  )
}