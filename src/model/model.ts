export enum UserActions {
    ADD_USER,
    SET_USERS,
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

export type UserAction = IAddUserAction | ISetUsersAction;
