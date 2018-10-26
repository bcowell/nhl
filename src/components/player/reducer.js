import { PLAYER_FETCH_SUCCESS } from '../../constants/actionTypes';

const playerSelector = (state, action) => {
    return [...state, ...action.payload.data.people]
}

const playerReducer = (state = [], action) => {
    switch(action.type) {
        case PLAYER_FETCH_SUCCESS:
            return playerSelector(state, action);
        
        default: 
            return state;
    }
}

export default playerReducer;