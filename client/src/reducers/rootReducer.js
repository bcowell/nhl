import { combineReducers } from 'redux';
import teams from '../components/teams/reducer';

const rootReducer = combineReducers({
    teams: teams,
})

export default rootReducer;