import { combineReducers } from 'redux';
import { UsersReducer } from './users/UsersReducer';
import { TodosReducer } from "./todos/TodosReducer";
import { FakeReducer } from "./fake/FakeReducer";

export const rootReducer = combineReducers({
    user: UsersReducer,
    todo: TodosReducer,
    fake: FakeReducer,
});

export type RootState = ReturnType<typeof rootReducer>

