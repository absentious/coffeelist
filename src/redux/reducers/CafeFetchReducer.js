import _ from 'lodash';

export default (state = null, action) => {
    //console.log(action);
    switch (action.type) {
        case 'get_cafe_data':
            //console.log(action);
            return action.payload;
        case 'cafe_sort':
            const sortByKey = key => (a, b) => a[key] > b[key];
            const sorted = _.clone(state.sort(sortByKey(action.payload)), true);
            console.log(`state=${JSON.stringify(state)}\nsorted=${JSON.stringify(sorted)}`);
            return sorted;
        case 'cafe_sort_inner':
            const sortByInnerKey = key => (a, b) => a["attributes"][key] < b["attributes"][key];
            const sortedI = _.clone(state.sort(sortByInnerKey(action.payload)), true);
            console.log(`state=${JSON.stringify(state)}\nsorted=${JSON.stringify(sortedI)}`);
            return sortedI;
        default:
            return state;
    }
};
