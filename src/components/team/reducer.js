import { TEAM_FETCH_SUCCESS } from '../../constants/actionTypes';

const teamSelector = (state, action) => {
    console.log(action.payload.data)
    return [...state, ...action.payload.data.teams[0].roster.roster]
}

const teamsReducer = (state = [], action) => {
    switch(action.type) {
        case TEAM_FETCH_SUCCESS:
            return teamSelector(state, action);
        
        default: 
            return state;
    }
}

export default teamsReducer;