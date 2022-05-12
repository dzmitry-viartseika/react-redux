import {ChangeEvent, useEffect, useState} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {useDispatch} from "react-redux";
import {TodosActions, ITodo} from "../model/todos/todos";
import TodosActionCreators from '../store/actions/'

function TodosPage(): JSX.Element {
    const [value, setValue] = useState<string>('');
    const { todos, error, loading } = useTypedSelector(state => state.todos);
    const { setTodos } = useActions(TodosActionCreators);
    const dispatch = useDispatch();

    const handleValue = (e: ChangeEvent<HTMLInputElement>): void => {
        const { target: { value } } = e;
        setValue(value);
    }

    const addNewTodo = () => {
        dispatch({
            type: TodosActions.ADD_TODO,
            payload: {
                id: 33,
                userId: 1,
                title: +value,
                completed: false,
            },
        })
        setValue('');
    }

    useEffect(() => {
        if (!todos.length) {
            setTodos()
        }
    }, [])

    return (
        <>
            <h1>Todos</h1>
            value={value}
            <input type="text" value={value} onChange={handleValue}/>
            <div>
                { !todos.length ? <h1>Клиенты отсутствуют</h1> : todos.map((todo: ITodo) => (
                    <div key={todo.id}>
                        user={todo.title}
                    </div>
                ))}
            </div>
            <button onClick={addNewTodo}>Add Todo</button>
        </>
    )
}
export default TodosPage;
