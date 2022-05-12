import { combineReducers } from 'redux';
import { UsersReducer } from './users/UsersReducer';
import {TodosReducer} from "./todos/TodosReducer";

export const rootReducer = combineReducers({
    user: UsersReducer,
    todo: TodosReducer,
});

export type RootState = ReturnType<typeof rootReducer>

