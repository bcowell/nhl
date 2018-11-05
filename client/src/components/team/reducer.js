import { 
    TEAM_FETCH_SUCCESS, 
    TEAM_FETCH_FAILURE
} from '../../constants/actionTypes';

const teamSelector = (state, action) => {
    return action.payload.data.teams[0];
}

const teamsReducer = (state = {}, action) => {
    switch(action.type) {
        case TEAM_FETCH_SUCCESS:
            return teamSelector(state, action);

        case TEAM_FETCH_FAILURE:
            return console.log("TEAM_FETCH_FAILURE");

        default: 
            return state;
    }
}

export default teamsReducer;