import {
    ADD_USER,
    SET_USERS,
} from '../../constants/redux-types';

const initialState = {
    users: [],
};

export const UsersReducer = (state = initialState, action: any) => {
    const { payload, type } = action;
    switch (type) {
        case ADD_USER:
            return {
                ...state,
                users: payload,
            }
        case SET_USERS:
            return {
                ...state,
                users: payload,
            }
        default:
            return state;
    }
}
