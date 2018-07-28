import { combineReducers } from 'redux';
import SelectReducer from './SelectReducer';
import CafeFetchReducer from './CafeFetchReducer';
import SortReducer from './SortReducer';
import ModalAttrReducer from './ModalAttrReducer';

export default combineReducers({
    selectedName: SelectReducer,
    cafes: CafeFetchReducer,
    sortFlag: SortReducer,
    modalAttr: ModalAttrReducer
});
