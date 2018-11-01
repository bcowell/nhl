import _ from 'lodash';
import { TEAM_FETCH_SUCCESS, PLAYER_IMAGE } from '../../constants/actionTypes';

const teamSelector = (state, action) => {
    return [...state, ...action.payload.data.teams[0].roster.roster]
}

const imagesSelector = (state, action) => {
    let newState = [...state];
    let images = action.payload.images;

     (newState || []).map(player => {
        let id = player.person.id;
        let image = _.find(images, {id});
        console.log(id)
        console.log(images)
        console.log(image); 
        return player.person.image = image
    })
    console.log(images);
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