import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import mySaga from '../api/saga';

const sagaMiddleware = createSagaMiddleware()
const initialState = {}

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga)

export default store;
