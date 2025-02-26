import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { userReducer } from './reducers';

export const store = createStore(userReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;