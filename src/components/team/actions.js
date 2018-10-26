import { teams } from '../../constants/api';
import { TEAM_FETCH } from '../../constants/actionTypes';

const doFetchTeam = (query) => (
    { 
        type: TEAM_FETCH, 
        payload: { 
            request: { 
                url: `${teams}${query}` 
            } 
        } 
    }
);

export default doFetchTeam;