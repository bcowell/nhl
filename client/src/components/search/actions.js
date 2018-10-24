import { SEARCH_FILTER } from '../../constants/actionTypes';

const doSearchFilter = (query) => (
    { type: SEARCH_FILTER, payload: { query } }
);

export default doSearchFilter;