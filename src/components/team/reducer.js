import { TEAM_FETCH_SUCCESS, PLAYER_IMAGE } from '../../constants/actionTypes';

const teamSelector = (state, action) => {
    return [...state, ...action.payload.data.teams[0].roster.roster]
}

const imagesSelector = (state, action) => {
    let newState = [...state];
     (newState || []).map(player => {
        let id = player.person.id;
        console.log(id)
        console.log(action.payload.images)
        return player.person.image = action.payload.images[id]
    })
    return newState;
}

const teamsReducer = (state = [], action) => {
    switch(action.type) {
        case TEAM_FETCH_SUCCESS:
            return teamSelector(state, action);
        case PLAYER_IMAGE:
            return imagesSelector(state, action);
        default: 
            return state;
    }
}

export default teamsReducer;