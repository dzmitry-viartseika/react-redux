import {ChangeEvent, useEffect, useState} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {useDispatch} from "react-redux";
import {UserActions} from "../model/users/users";
import UserActionCreators from '../store/actions/'

function UsersPage(): JSX.Element {
    const [value, setValue] = useState<string>('');
    const { users, error, loading } = useTypedSelector(state => state.users);
    const { setUsers } = useActions(UserActionCreators);
    const dispatch = useDispatch();

    const handleValue = (e: ChangeEvent<HTMLInputElement>): void => {
        const { target: { value } } = e;
        setValue(value);
    }

    const addNewUser = () => {
        dispatch({
            type: UserActions.ADD_USER,
            payload: {
                id: value,
                name: 'Test Name'
            },
        })
        setValue('');
    }

    useEffect(() => {
        if (!users.length) {
            setUsers()
        }
    }, [])
    return (
        <>
            <h1>Users</h1>
            value={value}
            <input type="text" value={value} onChange={handleValue}/>
            <div>
                { !users.length ? <h1>Клиенты отсутствуют</h1> : users.map((user: any) => (
                    <div key={user.id}>
                        user={user.name}
                    </div>
                ))}
            </div>
            <button onClick={addNewUser}>Add User</button>
        </>
    )
}
export default UsersPage;
