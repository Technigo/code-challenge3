import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Card = styled(Link)`
  height: 300px;
  margin: 10px auto;

  div {
    max-height: 100%;
    background: unset;
  }
  img {
    object-fit: cover;
    overflow: hidden;
  }
  h2 {
    font-size: 1.5em;

    }

  &:hover {
    text-decoration: none;
    opacity: 0.5;
  }
`


export const DrinkCard = ({ drink }) => {
	return (
    <Card to={`/drinks/${drink.idDrink}`} className="col-lg-4 col-md-6" >
      <div className="card">
        <img src={drink.strDrinkThumb} className="card-img-top" />
        <h2 className="card-title">{drink.strDrink}</h2>
      </div>
    </Card>

	);
};