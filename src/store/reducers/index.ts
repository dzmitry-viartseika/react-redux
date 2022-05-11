import { combineReducers } from 'redux';
import { UsersReducer } from './users/UsersReducer';

export const rootReducer = combineReducers({
    users: UsersReducer
});

export type RootState = ReturnType<typeof rootReducer>

