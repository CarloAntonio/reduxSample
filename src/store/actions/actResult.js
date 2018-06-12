import * as actionTypes from './actTypes';

export const saveResult = ( result ) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    };
}

export const storeResult = (result) => {
    //middleware (thunk), happens between dispatch and reducer
    return (dispatch, getState) => {
        //second parameter allow us to access the state
        //can be used to access state before dispatching action
        const oldCounter = getState().counter.counter;
        console.log(oldCounter);
        //thunk middleware catches this function, holds on to it, 
        //runs the function passed below, then runs the second function
        setTimeout(() => {
            dispatch(saveResult(result));
        }, 2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElementId: id
    };
};