import TheHeader from "../components/TheHeader/TheHeader";
import { useEffect, useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { UserActions } from "../model/model";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";


function SharedLayout(): JSX.Element {
    const [value, setValue] = useState<string>('');
    const { users, error, loading } = useTypedSelector(state => state.users);
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
        setUsers()
        // axios.get(`https://jsonplaceholder.typicode.com/users`)
        //     .then((response) => {
        //         const { data } = response;
        //         dispatch({
        //             type: UserActions.SET_USERS,
        //             payload: data.map((item: any) => {
        //                 const userObj = {
        //                     id: item.id,
        //                     name: item.name
        //                 }
        //
        //                 return userObj;
        //             }),
        //         });
        // })
    }, [])

    return (
        <>
            <TheHeader />
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
export default SharedLayout;
