import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { baseURL } from '../constants/api';
import { composeWithDevTools } from 'redux-devtools-extension';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';

const client = axios.create({
    baseURL: baseURL,
    responseType: 'json'
});

// If we have the reduxStore saved in localStorage set initialState
const persistedState = localStorage.getItem('reduxState') 
    ? JSON.parse(localStorage.getItem('reduxState')) 
    : {}

const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(
        applyMiddleware(
            axiosMiddleware(client),
            thunk
        )
    )
)

store.subscribe(()=> {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;