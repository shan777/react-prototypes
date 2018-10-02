import { combineReducers } from 'redux';
import clockReducer from './clock_reducer'; //importing clockReducer function

export default combineReducers({ //exporting the result of calling combineReducers
    clock: clockReducer    //passing an object as an argument.. object has the clock property that's set to clockReducer
});
