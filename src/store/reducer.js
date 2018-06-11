
import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
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
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(), 
                    value: state.counter
                }) //concat create a new array
            }
        case actionTypes.DELETE_RESULT:
            //option 1
            // const id = 2;
            // const newArray = [...state.results]; //create a copy of old array
            // newArray.splice(id, 1);

            //option 2
            const updatedArray = state.results.filter(result => result.id !== action.resultElementId); //filter returns new array

            return {
                ...state,
                results: updatedArray
            }
    }

    return state;
};

export default reducer;