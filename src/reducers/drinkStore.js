import { createSlice } from '@reduxjs/toolkit';
import { statusStore } from './statusStore';
import {userStore} from './userStore'

const initialState = {
	drinkList: [],
	selectedDrink: {},
  isLoading: false,
  errorMessage:""
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
    setLoading: (state, action) => {
			state.isLoading = action.payload;
		},
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload
    }
	}
});
export const fetchGames = () => {
	const GAMES_URL = 'https://aqveduktis-final-project.herokuapp.com/games';
	return (dispatch) => {
		dispatch(statusStore.actions.setLoading(true));
		fetch(GAMES_URL)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error(`code is ${res.status}`);
					
				}
			})
			.then((json) => {
				dispatch(gameStore.actions.addingGames(json));
				dispatch(statusStore.actions.setLoading(false));
			})
			.catch((err) => {
				console.log('error', err);
				dispatch(statusStore.actions.setErrorMessage('could not fetch the games'));
				dispatch(statusStore.actions.setLoading(false));
			});
	};
};

export const fetchOneGame = (slug) => {
	const GAMES_URL = `https://aqveduktis-final-project.herokuapp.com/games/${slug}`;
	return (dispatch) => {
		dispatch(statusStore.actions.setLoading(true));
		fetch(GAMES_URL)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
						throw new Error(`code is ${res.status}`);
				}
			})
			.then((json) => {
				dispatch(gameStore.actions.setGame(json));
				dispatch(statusStore.actions.setLoading(false));
			})
			.catch((err) => {
				console.log('error', err);
				dispatch(statusStore.actions.setErrorMessage('could not fetch game'));
				dispatch(gameStore.actions.setGame({}));
				dispatch(statusStore.actions.setLoading(false));
			});
	};
};
