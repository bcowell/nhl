import { people } from '../../constants/api';
import { PLAYER_FETCH } from '../../constants/actionTypes';

const doFetchPlayer = (query) => (
    { 
        type: PLAYER_FETCH, 
        payload: { 
            request: { 
                url: `${people}${query}` 
            } 
        } 
    }
);

export default doFetchPlayer;