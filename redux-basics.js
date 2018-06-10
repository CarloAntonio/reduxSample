/************
 * This sample is uses node.js and is a stand alone from the rest of the react application.
 * This is used to practice the basics of redux on it's own
 ***********/

const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//Reducer, only things that interacts with Store
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }

    if(action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }

    return state;
};

//Store 
const store = createStore(rootReducer); //create store

//Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

//Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({
    type: 'ADD_COUNTER', 
    value: 10 
});

