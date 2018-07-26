import _ from 'lodash';

export default (state = null, action) => {
    //console.log(action);
    switch (action.type) {
        case 'cafe_sort':
            return action.payload;
        default:
            return state;
    }
};
