import { Outlet } from 'react-router-dom';
import TheHeader from "../components/TheHeader/TheHeader";
import {useEffect, useState, useReducer, Reducer} from "react";
import axios from 'axios';

enum UsersActions {
    ADD_NEW_USER = 'ADD_NEW_USER',
    CHANGE_POST = 'CHANGE_POST',
    GET_USERS_LIST = 'GET_USERS_LIST',
    GET_POST = 'GET_POST',
    CHANGE_CONDITIONAL = 'CHANGE_CONDITIONAL',
    REMOVE_USER = 'REMOVE_USER',
}

interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface IUserPost {
    body: string;
    id: number;
    title: string;
    userId: number;
}

type ResponseUserPost = {
    data: IUserPost;
}

interface IAddress {
    suite: string;
    city: string;
    zipcode: string;
    geo: any;
}

interface IUser {
    id: number;
    website: string;
    username: string;
    phone: string;
    name: string;
    email: string;
    company: ICompany;
    address: IAddress;
}

interface UserState {
    usersList: IUser[] | [];
    post: IUserPost;
    conditional: boolean;
}

type UserAction = {
    type: UsersActions;
    payload: any;
}

type ReducerType<UserState, UserAction> =
    (state: UserState, action: UserAction) => UserState;

const reducer = (state: UserState, action: UserAction): UserState=> {
    const { type, payload } = action;
    switch (type) {
        case UsersActions.ADD_NEW_USER: {
            return {
                ...state,
                usersList: payload,
            }
        }
        case UsersActions.GET_USERS_LIST: {
            return {
                ...state,
                usersList: payload,
            }
        }
        case UsersActions.GET_POST: {
            return {
                ...state,
                conditional: true,
                post: payload,
            }
        }
        case UsersActions.CHANGE_POST: {
            return {
                ...state,
                conditional: false,
                post: payload,
            }
        }
        case UsersActions.CHANGE_CONDITIONAL: {
            return {
                ...state,
                conditional: payload,
            }
        }
        case UsersActions.REMOVE_USER: {
            return {
                ...state,
                usersList: payload,
            }
        }
        default:
            console.error(`Unhandled action type ${action.type}`);
            return state;
    }
}


const initialState: UserState = {
    usersList: [],
    post: {
        body: '',
        id: 0,
        title: '',
        userId: 0,
    },
    conditional: false,
}

function SharedLayout(): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [userName, setUserName] = useState<string>('');
    const changeValue = (event: any): void => {
        setUserName(event.target.value);
    }

    const addNewUser = () => {
        const newUser = {
            "id": 11,
            "name": userName,
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "address": {
                "street": "Skiles Walks",
                "suite": "Suite 351",
                "city": "Roscoeview",
                "zipcode": "33263",
                "geo": {
                    "lat": "-31.8129",
                    "lng": "62.5342"
                }
            },
            "phone": "(254)954-1289",
            "website": "demarco.info",
            "company": {
                "name": "Keebler LLC",
                "catchPhrase": "User-centric fault-tolerant solution",
                "bs": "revolutionize end-to-end systems"
            }
        };
        const newArray = [...state.usersList, newUser];
        dispatch({
            type: UsersActions.ADD_NEW_USER,
            payload: newArray
        })
    }

    const updateConditional = () => {
        dispatch({
            type: UsersActions.CHANGE_CONDITIONAL,
            payload: !state.conditional,
        })
    };

    const changePost = async () => {
        try {
            const { data } = await postRequest(5);
            dispatch({
                type: UsersActions.CHANGE_POST,
                payload: data,
            })
        }
        catch (e) {
            console.error(e);
        }
    }

    const deleteUser = (userId: number) => {
        const { usersList } = state;
        if (usersList.length) {
            const filteredUsers = usersList.filter((item: any) => item.id !== userId);
            console.log('filteredUsers', filteredUsers);
            dispatch({
                type: UsersActions.REMOVE_USER,
                payload: filteredUsers,
            })
        }

    }

    const postRequest = async (post = 1): Promise<ResponseUserPost> => {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${post}`);
    }

    useEffect(() => {
        console.log('useEffect')
        const fetchData = async () => {
            try {
                const response = await postRequest();
                const { data } = response;
                dispatch({
                    type: UsersActions.GET_POST,
                    payload: data,
                });
            } catch (e) {
                console.error(e);
            }
        }

        fetchData().catch(console.error);

    }, []);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => {
                dispatch({
                    type: UsersActions.GET_USERS_LIST,
                    payload: response.data,
                });
        })
    }, [])

    return (
        <>
            <TheHeader />
            <input type="text" value={userName} onChange={changeValue}/>
            <br/>
            <button onClick={addNewUser} disabled={!userName}>Add New User</button>
            {
                state.usersList.map((item: any) => (
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <div>
                            <button onClick={() => deleteUser(item.id)}>Remove User</button>
                        </div>
                    </div>
                ))
            }
            <br/>
            <button onClick={updateConditional}>Update conditional</button>
            <br/>
            <button onClick={changePost}>change Post</button>
            {state.post ? <h1>{ state.post.body }</h1> : null}
            <br/>
            conditional={state.conditional ? <small>True</small> : <small>False</small>}
            <section className='section'>
                <Outlet />
            </section>
        </>
    )
}
export default SharedLayout;
