import {UserActions, IUserAction, IUser, ServerResponse} from "../../../model/users/users";
import {Dispatch} from 'redux';
import axios from 'axios';

export function setUsers() {
    return async (dispatch: Dispatch<IUserAction>) => {
        try {
            axios.get<ServerResponse>(`https://jsonplaceholder.typicode.com/users`)
                .then((response) => {
                if (Array.isArray(response.data)) {
                    const modifiedArray = response.data.map((item: any) => {
                        const userObj = {
                            id: item.id,
                            name: item.name
                        }

                        return userObj;
                    })
                    dispatch({
                        type: UserActions.SET_USERS,
                        payload: modifiedArray,
                    })
                }

            })
        } catch (e) {
            console.error(e);
            dispatch({
                type: UserActions.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
    // return {
    //     type: UserActions.SET_USERS,
    //     payload: users
    // }
}

export function getAllUsers(users: IUser) {
    return {
        type: UserActions.ADD_USER,
        payload: users
    }
}
