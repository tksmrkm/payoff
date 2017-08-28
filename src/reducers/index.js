import { combineReducers } from 'redux';
import tabs from './tabs';
import users from './users';
import dealings from './dealings';
import menus from './menus';
import form_dealing from './form_dealing';

export default combineReducers({
    tabs,
    users,
    dealings,
    menus,
    form_dealing
});
