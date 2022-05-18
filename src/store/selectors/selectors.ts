import { createSelector } from 'reselect';

export const getUsers = (state: any) => {
    console.log('1');
    console.log('state', state);
    return state.user;
};

export const getUsersSelector = (state: any) => {
    console.log('2');
    return getUsers(state).filter((item: any) => true)
}

export const getUsersSuperSelector = createSelector(getUsers, (users) => {
    console.log('3');
    debugger;
    console.log('getUsersSuperSelector');
    return users;
})
