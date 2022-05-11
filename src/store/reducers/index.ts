import { combineReducers } from 'redux';
import { UsersReducer } from "../reducers/UsersReducer";

const rootReducer = combineReducers({
    users: UsersReducer,
});

export default rootReducer;
