import { 
    PLAYER_FETCH_SUCCESS,
    PLAYER_IMAGE_LOAD  
} from '../../constants/actionTypes';

const playerSelector = (state, action) => {
    return action.payload.data.people[0]
}

const imagesSelector = (state, action) => {
    let image = action.payload.image;
    let newState = {...state, image};
    return newState
}

const playerReducer = (state = {}, action) => {
    switch(action.type) {
        case PLAYER_FETCH_SUCCESS:
            return playerSelector(state, action);

        case PLAYER_IMAGE_LOAD:
            return imagesSelector(state, action);

        default: 
            return state;
    }
}

export default playerReducer;