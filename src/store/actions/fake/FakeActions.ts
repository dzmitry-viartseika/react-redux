import {Dispatch} from 'redux';

export function setFake() {
    return async (dispatch: Dispatch) => {
        setTimeout(() => {
            console.log('SETFAKE')
            dispatch(setTodosAction())
        }, 1000)
    }
}

const setTodosAction = () => ({
    type: 'FAKE',
    payload: 'fake wertey',
});
