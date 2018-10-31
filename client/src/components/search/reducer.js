import { SEARCH_FILTER } from '../../constants/actionTypes';

const filter = (state, action) => {
    return action.payload.query;
}

const filterReducer = (state = '', action) => {
    switch(action.type) {
        case SEARCH_FILTER:
            return filter(state, action);

        default: 
            return state;
    }
}

export default filterReducer;