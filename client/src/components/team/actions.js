import { teams } from '../../constants/api';
import { 
    TEAM_FETCH,
    TEAM_FETCH_FAILURE 
} from '../../constants/actionTypes';

const fetchTeam = (query) => (
    { 
        type: TEAM_FETCH, 
        payload: { 
            request: { 
                url: `${teams}${query}` 
            } 
        } 
    }
);

const doFetchTeam = (query) => {
    return (dispatch) => {
        try {
            dispatch(fetchTeam(query));
        } 
        catch (e) {
            dispatch({type: TEAM_FETCH_FAILURE})
        }
    }
}

export default doFetchTeam;