import {ChangeEvent, useEffect, useState} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {useDispatch, useSelector} from "react-redux";
import {UserActions} from "../model/users/users";
import {getUsers, getUsersSuperSelector} from "../store/selectors/selectors";

function UsersPage(): JSX.Element {
    const [value, setValue] = useState<string>('');
    const { users, error, loading } = useSelector(getUsersSuperSelector);
    const { setUsers } = useActions();
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
        console.log('USERS PAGE')
        setUsers()
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
