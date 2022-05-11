import {
    GET_USERS,
    SET_USERS,
} from '../../constants/redux-types';

const initialState = {
    users: [1,2,3],
};

export const UsersReducer = (state = initialState, action: any) => {
    const { payload, type } = action;
    switch (type) {
        case SET_USERS:
            console.log('payload', payload);
            return {
                ...state,
                users: payload,
            }
        case GET_USERS:
            return {
                ...state,
            }
        default:
            new Error(`Dont Found ${type} action`);
            return state;
    }
}
