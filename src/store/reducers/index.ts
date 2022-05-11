import { combineReducers } from 'redux';
import { UsersReducer } from '../reducers/UsersReducer';

export const rootReducer = combineReducers({
    users: UsersReducer
});

export type RootState = ReturnType<typeof rootReducer>

