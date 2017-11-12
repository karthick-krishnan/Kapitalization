'use strict';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/index';
import ReduxThunk from 'redux-thunk';

export default function configureStore() {
    let store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
    return store
}