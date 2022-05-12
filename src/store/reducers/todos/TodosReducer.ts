import {TodosActions, ITodosState, TodosAction} from "../../../model/todos/todos";

const initialState: ITodosState = {
    todos: [],
    loading: false,
    error: null
};

export const TodosReducer = (state = initialState, action: TodosAction): ITodosState => {
    const { payload, type } = action;
    switch (type) {
        case TodosActions.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, payload],
            }
        case TodosActions.SET_TODOS:
            console.log('SET_TODOS', payload);
            return {
                ...state,
                todos: payload,
                loading: true,
            }
        case TodosActions.FETCH_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                todos: payload,
            }
        case TodosActions.FETCH_TODOS_ERROR:
            return {
                ...state,
                loading: false,
                error: payload,
                todos: [],
            }
        default:
            console.error(`Unhandled action type ${type}`);
            return state;
    }
}
