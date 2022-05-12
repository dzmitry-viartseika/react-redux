import {ChangeEvent, useEffect, useState} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {useDispatch} from "react-redux";
import {TodosActions, ITodo} from "../model/todos/todos";

function TodosPage(): JSX.Element {
    const [value, setValue] = useState<string>('');
    const { todos } = useTypedSelector(state => state.todo);
    const { setTodos } = useActions();
    const dispatch = useDispatch();
    const pages: number[] = [1, 2, 3, 4, 5];

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
        console.log('TODOS PAGE')
        setTodos()
    }, [])

    return (
        <>
            <h1>Todos</h1>
            <input type="text" value={value} onChange={handleValue}/>
            <div>
                { !todos.length ? <h1>Клиенты отсутствуют</h1> : todos.map((todo: ITodo) => (
                    <div key={todo.id}>
                        {todo.title}
                    </div>
                ))}
            </div>
            <button onClick={addNewTodo}>Add Todo</button>
            <hr/>
            <div style={{display: "flex"}}>
                {pages.map(p =>
                    <div key={p}>
                        {p}
                    </div>
                )}
            </div>
        </>
    )
}
export default TodosPage;
