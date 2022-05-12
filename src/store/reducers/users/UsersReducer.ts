import { IUserAction, IUserState, UserActions } from "../../../model/users/users";

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
            console.log('SET_USERS', payload);
            return {
                ...state,
                users: payload,
            }
        case UserActions.FETCH_USERS_SUCCESS:
            return {
                loading: false,
                error: null,
                users: action.payload
            }
        case UserActions.FETCH_USERS_ERROR:
            return {
                loading: false,
                error: action.payload,
                users: []
            }
        default:
            console.error(`Unhandled action type ${action.type}`);
            return state;
    }
}
