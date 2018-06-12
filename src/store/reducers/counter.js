import * as actionTypes from '../actions/actTypes';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.INCREMENT:
            //option 1 of changing state, immutably
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            //option 2 of changing state, immutably
            const newState = Object.assign({}, state);
            newState.counter = state.counter - 1;
            return newState;

        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
    }

    return state;
};

export default reducer;