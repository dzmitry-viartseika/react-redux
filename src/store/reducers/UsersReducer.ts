import { IUserAction, IUserState, UserActions } from "../../model/model";

const initialState: IUserState = {
    users: [],
    loading: false,
    error: null
};

export const UsersReducer = (state = initialState, action: IUserAction): IUserState => {
    const { payload, type } = action;
    switch (type) {
        case UserActions.ADD_USER:
            return {
                ...state,
                users: [...state.users, payload],
            }
        case UserActions.SET_USERS:
            return {
                ...state,
                users: [...state.users, ...payload],
            }
        default:
            console.error(`Unhandled action type ${action.type}`);
            return state;
    }
}
