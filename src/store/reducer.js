
const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'INCREMENT':
            //option 1 of changing state, immutably
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            //option 2 of changing state, immutably
            const newState = Object.assign({}, state);
            newState.counter = state.counter - 1;
            return newState;

        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.val
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.val
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(), 
                    value: state.counter
                }) //concat create a new array
            }
        case 'DELETE_RESULT':
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