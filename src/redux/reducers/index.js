import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SelectReducer from './SelectReducer';
import CafeFetchReducer from './CafeFetchReducer';
import SortReducer from './SortReducer';
import ModalAttrReducer from './ModalAttrReducer';
import ModalOpenReducer from './ModalOpenReducer';
import LocationReducer from './LocationReducer';
import CityReducer from './CityReducer';
import AuthReducer from './AuthReducer.js';

export default combineReducers({
    
    auth: AuthReducer,
    selectedName: SelectReducer,
    cafes: CafeFetchReducer,
    sortFlag: SortReducer,
    modalAttr: ModalAttrReducer,
    modalOpen: ModalOpenReducer,
    location: LocationReducer,
    city: CityReducer,
    form: formReducer
});
