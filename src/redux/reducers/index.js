import { combineReducers } from 'redux';
import SelectReducer from './SelectReducer';
import CafeFetchReducer from './CafeFetchReducer';

export default combineReducers({
    selectedName: SelectReducer,
    cafes: CafeFetchReducer
});
