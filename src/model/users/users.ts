export enum UserActions {
    ADD_USER,
    SET_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR,
}

export interface ServerResponse {
    data: ServerData
}

export interface ServerData {
    users: any[]
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
    type: number;
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
