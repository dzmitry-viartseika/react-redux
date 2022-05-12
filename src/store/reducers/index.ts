import { combineReducers } from 'redux';
import { UsersReducer } from './users/UsersReducer';
import {TodosReducer} from "./todos/TodosReducer";

export const rootReducer = combineReducers({
    users: UsersReducer,
    todos: TodosReducer,
});

export type RootState = ReturnType<typeof rootReducer>

