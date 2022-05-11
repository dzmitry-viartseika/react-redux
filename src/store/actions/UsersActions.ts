import {
    SET_USERS,
    ADD_USER,
} from '../../constants/redux-types'

export function setUsers(users: any) {
    return {
        type: SET_USERS,
        payload: users
    }
}

export function getAllUsers(users: any) {
    return {
        type: ADD_USER,
        payload: users
    }
}
