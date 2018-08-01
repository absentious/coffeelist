import { combineReducers } from 'redux';
import SelectReducer from './SelectReducer';
import CafeFetchReducer from './CafeFetchReducer';
import SortReducer from './SortReducer';
import ModalAttrReducer from './ModalAttrReducer';
import ModalOpenReducer from './ModalOpenReducer';
import LocationReducer from './LocationReducer';

export default combineReducers({
    selectedName: SelectReducer,
    cafes: CafeFetchReducer,
    sortFlag: SortReducer,
    modalAttr: ModalAttrReducer,
    modalOpen: ModalOpenReducer,
    location: LocationReducer
});
