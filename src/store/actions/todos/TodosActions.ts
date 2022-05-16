import {ITodosAction, TodosActions, ITodo, ServerResponse} from "../../../model/todos/todos";
import {Dispatch} from 'redux';
import axios from 'axios';

export function setTodos() {
    return async (dispatch: Dispatch<ITodosAction>) => {
        try {
            axios.get<ServerResponse>(`https://jsonplaceholder.typicode.com/todos`)
                .then((response) => {
                if (Array.isArray(response.data)) {
                    setTimeout(() => {
                        dispatch(setTodosAction(response.data))
                    }, 500)
                }

            })
        } catch (e) {
            console.error(e);
            dispatch({
                type: TodosActions.FETCH_TODOS_ERROR,
                payload: 'Произошла ошибка при загрузке дел'
            })
        }
    }
}

const setTodosAction = (data: any): ITodosAction => ({
    type: TodosActions.SET_TODOS,
    payload: data,
});
