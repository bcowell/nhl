import { TEAMS_FETCH_SUCCESS } from '../../constants/actionTypes';

const teamSelector = (state, action) => {
    return [...state, ...action.payload.data.teams]
}

const teamsReducer = (state = [], action) => {
    switch(action.type) {
        case TEAMS_FETCH_SUCCESS:
            return teamSelector(state, action);
        
        default: 
            return state;
    }
}

export default teamsReducer;