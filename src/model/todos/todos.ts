export enum TodosActions {
    ADD_TODO,
    SET_TODOS,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_ERROR,
}

export interface ServerResponse {
    data: ServerData
}

export interface ServerData {
    todos: ITodo[]
}

export interface ITodosState {
    todos: any[];
    todo: any;
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
    type: number;
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
