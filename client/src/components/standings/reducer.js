import { STANDINGS_FETCH_SUCCESS } from '../../constants/actionTypes';

const standingsSelector = (state, action) => {
    const records = action.payload.data.records;
    return [...state, ...records]
}

const teamsReducer = (state = [], action) => {
    switch(action.type) {
        case STANDINGS_FETCH_SUCCESS:
            return standingsSelector(state, action);
        
        default: 
            return state;
    }
}

export default teamsReducer;