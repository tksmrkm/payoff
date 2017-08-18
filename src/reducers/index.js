import { combineReducers } from 'redux';
import tabs from './tabs';
import users from './users';
import dealings from './dealings';
import menus from './menus';

export default combineReducers({
    tabs,
    users,
    dealings,
    menus
});
