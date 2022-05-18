const initialState = {
    fakes: '',
};

type initialStateType = typeof initialState;

export const FakeReducer = (state: initialStateType = initialState, action: any): initialStateType => {
    const { payload, type } = action;
    switch (type) {
        case 'SET_FAKE':
            return {
                ...state,
                fakes: payload,
            }
        default:
            console.error(`Unhandled action type ${type}`);
            return state;
    }
}
