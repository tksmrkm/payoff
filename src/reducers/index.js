import { combineReducers } from 'redux';
import tabs from './tabs';
import users from './users';
import dealings from './dealings';
import add_dealing_form from './add_dealing_form';

export default combineReducers({
    tabs,
    users,
    dealings,
    add_dealing_form
});
