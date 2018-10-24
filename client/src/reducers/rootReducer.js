import { combineReducers } from 'redux';
import teamsReducer from '../components/teams/reducer';
import searchReducer from '../components/search/reducer';

const rootReducer = combineReducers({
    teams: teamsReducer,
    searchQuery: searchReducer,
})

export default rootReducer;