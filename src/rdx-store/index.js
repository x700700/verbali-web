import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import app from './app.store';
import auth from './auth.store';
import smartlink from './smartlink.store';


const reducer = combineReducers({
    app,
    auth,
    smartlink,
});


const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}));
const store = createStore(reducer, middleware);

export default store

