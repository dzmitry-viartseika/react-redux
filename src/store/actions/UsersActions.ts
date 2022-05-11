import {
    SET_USERS,
    ADD_USER,
} from '../../constants/redux-types'

export function setUsers(users: any) {
    console.log('setUserssetUserssetUserssetUsers', users);
    return {
        type: SET_USERS,
        payload: users
    }
}

export function getAllUsers(users: any) {
    console.log('usersusers', users);
    return {
        type: ADD_USER,
        payload: users
    }
}
