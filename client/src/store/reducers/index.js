import { combineReducers } from 'redux';
import articles from './articles_reducer';
import users from './users_reducer';
import site from './site_reducer';
import notifications from './notification_reducer';

const appReducers = combineReducers({
    articles,
    users,
    site,
    notifications
});

export default appReducers;