import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { drinkStore } from './reducers/drinkStore';
import { commentStore } from './reducers/commentStore';
import { DrinksList } from './pages/DrinksList';
import { DrinkDetail } from './pages/DrinkDetail';
import { Header } from './components/Header';

const reducer = combineReducers({
	drinkStore: drinkStore.reducer,
	commentStore: commentStore.reducer
});
//const store = configureStore({ reducer });

//from louise
const saveToLocalStorage = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('drinks-reduxState', serializedState);
	} catch (e) {
		console.log(e);
	}
};

const loadFromLocalStorage = () => {
	try {
		const serializedState = localStorage.getItem('drinks-reduxState');
		if (serializedState === null) return undefined;
		return JSON.parse(serializedState);
	} catch (e) {
		console.log(e);
		return undefined;
	}
};

// const reducer = combineReducers({
//   ui: ui.reducer,
//   cart: cart.reducer,
//   products: products.reducer
// })
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadFromLocalStorage();

const store = createStore(reducer, persistedState, composeEnhancer(applyMiddleware(thunk)));

store.subscribe(() => saveToLocalStorage(store.getState()));

export const App = () => {
	return (
		<Provider store={store}>
    <div className="container">
    	<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" exact>
						<DrinksList />
					</Route>
					<Route path="/drinks/:id">
						<DrinkDetail />
					</Route>
				</Switch>
			</BrowserRouter>
    </div>

		</Provider>
	);
};

    // {
    //   "src": "favicon.ico",
    //   "sizes": "64x64 32x32 24x24 16x16",
    //   "type": "image/x-icon"
    // },
    // {
    //   "src": "logo192.png",
    //   "type": "image/png",
    //   "sizes": "192x192"
    // },
    // {
    //   "src": "logo512.png",
    //   "type": "image/png",
    //   "sizes": "512x512"
    // }