import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import apiReducer from './components/modules/reducer';

const reducers = combineReducers({
     api: apiReducer
});

const store = createStore(reducers);

export default store;