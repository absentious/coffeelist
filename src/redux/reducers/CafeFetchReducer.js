import _ from 'lodash';

export default (state = null, action) => {
    //console.log(action);
    switch (action.type) {
        case 'get_cafe_data':
            //console.log(action);
            return action.payload;
        case 'cafe_sort':
            //console.log(state);
            //console.log(action);
            const sortByKey = key => (a, b) => a[key] > b[key];
            const sorted = _.clone(state.sort(sortByKey(action.payload)), true);
            console.log(`state=${JSON.stringify(state)}\nsorted=${JSON.stringify(sorted)}`)
            return [...sorted];
        default:
            return state;
    }
};
