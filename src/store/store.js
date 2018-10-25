import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { baseURL } from '../constants/api';
import { composeWithDevTools } from 'redux-devtools-extension';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';

const client = axios.create({
    baseURL: baseURL,
    responseType: 'json'
});

const store = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(
            axiosMiddleware(client),
        )
    )
)

export default store;