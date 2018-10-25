import { standings } from '../../constants/api';
import { STANDINGS_FETCH } from '../../constants/actionTypes';

const doFetchStandings = (query) => (
    { 
        type: STANDINGS_FETCH, 
        payload: { 
            request: { 
                url: `${standings}${query}` 
            } 
        } 
    }
);

export default doFetchStandings;