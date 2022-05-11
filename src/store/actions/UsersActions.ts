import {
    SET_USERS,
    GET_USERS,
} from '../../constants/redux-types'

export function setUsers(users: any) {
    return {
        type: SET_USERS,
        payload: users
    }
}

export function getAllUsers(users: any) {
    return {
        type: GET_USERS,
        payload: users
    }
}
