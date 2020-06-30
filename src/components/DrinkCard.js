import React from 'react';
import {Link} from 'react-router-dom'

export const DrinkCard = ({ drink }) => {
	return (
    		<Link to={`/drinks/${drink.idDrink}`} className="col-lg-4 col-md-6" >
        <div className="card">
          <img src={drink.strDrinkThumb} className="card-img-top" />
          <h2 className="card-title">{drink.strDrink}</h2>
        </div>
		</Link>

	);
};