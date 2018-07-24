import { combineReducers } from 'redux';
import SelectReducer from './SelectReducer';

export default combineReducers({
    selectedName: SelectReducer
});
