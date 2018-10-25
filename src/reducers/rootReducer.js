import { combineReducers } from 'redux';
import teamsReducer from '../components/teams/reducer';
import searchReducer from '../components/search/reducer';
import standingsReducer from '../components/standings/reducer';

const rootReducer = combineReducers({
    teams: teamsReducer,
    searchQuery: searchReducer,
    standings: standingsReducer,
})

export default rootReducer;