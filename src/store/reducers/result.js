
import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(), 
                    value: action.result
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