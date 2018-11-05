import { combineReducers } from 'redux';
import teamsReducer from '../components/teams/reducer';
import teamReducer from '../components/team/reducer';
import searchReducer from '../components/search/reducer';
import standingsReducer from '../components/standings/reducer';
import playerReducer from '../components/player/reducer';

const rootReducer = combineReducers({
    teams: teamsReducer,
    player: playerReducer,
    team: teamReducer,
    searchQuery: searchReducer,
    standings: standingsReducer,
})

export default rootReducer;