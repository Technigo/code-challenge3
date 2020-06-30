import { createSlice } from '@reduxjs/toolkit';
import { commentStore } from './commentStore';

const initialState = {
	drinkList: [],
	selectedDrink: {},
};

export const drinkStore = createSlice({
	name: 'drinkStore',
	initialState,
	reducers: {
		addingDrinks: (state, action) => {
			state.drinkList = action.payload
		},
		setDrink: (state, action) => {
			state.selectedDrink = action.payload
		},

	}
});
export const fetchDrinks = () => {
	const DRINK_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';
	return (dispatch) => {
		dispatch(commentStore.actions.setLoading(true));
		fetch(DRINK_URL)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error(`code is ${res.status}`);
					
				}
			})
			.then((json) => {
				dispatch(drinkStore.actions.addingDrinks(json.drinks));
				dispatch(commentStore.actions.setLoading(false));
			})
			.catch((err) => {
				console.log('error', err);
				dispatch(commentStore.actions.setErrorMessage('could not fetch the games'));
				dispatch(commentStore.actions.setLoading(false));
			});
	};
};

export const fetchOneDrink = (id) => {
	const DRINKS_URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
	return (dispatch) => {
		dispatch(commentStore.actions.setLoading(true));
		fetch(DRINKS_URL)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
						throw new Error(`code is ${res.status}`);
				}
			})
			.then((json) => {
        if (json.drinks) {
          dispatch(drinkStore.actions.setDrink(json.drinks[0]));
				  dispatch(commentStore.actions.setLoading(false));
        } 
        else {
          throw new Error('404 not found')
        }
				
			})
			.catch((err) => {
				console.log('error', err);
				dispatch(commentStore.actions.setErrorMessage('could not fetch game'));
				dispatch(drinkStore.actions.setDrink({}));
				dispatch(commentStore.actions.setLoading(false));
			});
	};
};
