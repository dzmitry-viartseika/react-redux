export enum TodosActions {
    ADD_TODO = 'add_todo',
    SET_TODOS = 'set_todos',
    FETCH_TODOS_SUCCESS = 'fetch_todos_success',
    FETCH_TODOS_ERROR = 'fetch_todos_error',
}

export interface ServerResponse {
    data: ServerData
}

export interface ServerData {
    todos: ITodo[]
}

export interface ITodosState {
    todos: any[];
    loading: boolean;
    error: null | string;
}

export interface ITodo {
    userId: number,
    id: number;
    title: string;
    completed: boolean;
}

interface IAddTodosAction {
    type: TodosActions.ADD_TODO;
    payload: ITodo;
}

interface ISetTodosAction {
    type: TodosActions.SET_TODOS;
    payload: ITodo[];
}

export interface ITodosAction {
    type: string;
    payload?: any;
}

interface FetchTodosSuccessAction {
    type: TodosActions.FETCH_TODOS_SUCCESS;
    payload: ITodo[]
}
interface FetchTodosErrorAction {
    type: TodosActions.FETCH_TODOS_ERROR;
    payload: string;
}

export type TodosAction = IAddTodosAction | ISetTodosAction | FetchTodosSuccessAction | FetchTodosErrorAction;
