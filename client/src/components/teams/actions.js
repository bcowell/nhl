import { teams } from '../../constants/api';
import { TEAMS_FETCH } from '../../constants/actionTypes';

const doFetchCars = () => (
    { type: TEAMS_FETCH, payload: { request: { url: teams } } }
);

export default doFetchCars;