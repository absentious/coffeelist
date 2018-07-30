import _ from 'lodash';

export default (state = null, action) => {
    //console.log(action);
    switch (action.type) {
        case 'get_cafe_data':
            //console.log(action);
            return action.payload;
        case 'cafe_sort':
            const sortByKey = key => (a, b) => a[key] > b[key];
            const stateArr = _.map(state, (val, uid) => {
                return { ...val };
            });
            const sorted = _.clone(stateArr.sort(sortByKey(action.payload)), true);
            console.log(state);
            console.log(sorted);
            return sorted;
        case 'cafe_sort_inner':
            const sortByInnerKey = key => (a, b) => a["attributes"][key] < b["attributes"][key];
            const stateArrI = _.map(state, (val, uid) => {
                return { ...val };
            });
            const sortedI = _.clone(stateArrI.sort(sortByInnerKey(action.payload)), true);
            console.log(`state=${JSON.stringify(state)}\nsorted=${JSON.stringify(sortedI)}`);
            return sortedI;
        default:
            return state;
    }
};
