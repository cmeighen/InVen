import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ivcontainer from './ivcontainer';

export default combineReducers({
    routing: routerReducer,
    ivcontainer
});