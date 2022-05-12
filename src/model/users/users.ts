export enum UserActions {
    ADD_USER = 'add_user',
    SET_USERS = 'set_users',
    FETCH_USERS_SUCCESS = 'fetch_users_success',
    FETCH_USERS_ERROR = 'fetch_users_error',
}

export interface ServerResponse {
    data: ServerData
}

export interface ServerData {
    users: IUser[]
}

export interface IUserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

export interface IUser {
    id: number;
    name: string;
}

interface IAddUserAction {
    type: UserActions.ADD_USER;
    payload: IUser;
}

interface ISetUsersAction {
    type: UserActions.SET_USERS;
    payload: IUser[];
}

export interface IUserAction {
    type: string;
    payload?: any;
}

interface FetchUsersSuccessAction {
    type: UserActions.FETCH_USERS_SUCCESS;
    payload: IUser[]
}
interface FetchUsersErrorAction {
    type: UserActions.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction = IAddUserAction | ISetUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;
