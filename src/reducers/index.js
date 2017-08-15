import { combineReducers } from 'redux';
import tabs from './tabs';
import users from './users';
import dealings from './dealings';

export default combineReducers({
    tabs,
    users,
    dealings
});