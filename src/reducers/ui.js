//src/reducers/ui.js
import { fromJS } from 'immutable';

const initialState = fromJS({
    loading: false,
});

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return state.setIn(['loading'], action.payload);

        default:
            return state;
    } 
}