import {createStore, combineReducers} from 'redux';
import simpsonReducer from './reducers/simpsonReducer';

const reducers = combineReducers({simpsonsList: simpsonReducer});
const store = createStore(reducers);

export default store;