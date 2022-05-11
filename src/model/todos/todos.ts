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
    todos: ITodos[]
}

export interface ITodosState {
    todos: any[];
    loading: boolean;
    error: null | string;
}

export interface ITodos {
    userId: number,
    id: number;
    title: string;
    completed: boolean;
}

interface IAddTodosAction {
    type: TodosActions.ADD_TODO;
    payload: ITodos;
}

interface ISetTodosAction {
    type: TodosActions.SET_TODOS;
    payload: ITodos[];
}

export interface ITodosAction {
    type: number;
    payload?: any;
}

interface FetchTodosSuccessAction {
    type: TodosActions.FETCH_TODOS_SUCCESS;
    payload: ITodos[]
}
interface FetchTodosErrorAction {
    type: TodosActions.FETCH_TODOS_ERROR;
    payload: string;
}

export type TodosAction = IAddTodosAction | ISetTodosAction | FetchTodosSuccessAction | FetchTodosErrorAction;
