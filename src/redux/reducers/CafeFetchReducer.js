import _ from 'lodash';

export default (state = null, action) => {
    //console.log(action);
    switch (action.type) {
        case 'get_cafe_data':
            //console.log(action);
            return action.payload;
        case 'cafe_sort':
            const stateArr = _.map(state, (val, uid) => {
                return { ...val };
            });

            const sorted = _.clone(stateArr.sort(function(a, b) {
                var x = a[action.payload];
                var y = b[action.payload];
        
                if (typeof x == "string")
                {
                    x = (""+x).toLowerCase(); 
                }
                if (typeof y == "string")
                {
                    y = (""+y).toLowerCase();
                }
        
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            }), true);

            return sorted;
        case 'cafe_sort_inner':
            const stateArrI = _.map(state, (val, uid) => {
                return { ...val };
            });

            const sortedI = _.clone(stateArrI.sort(function(a, b) {
                var x = a["attributes"][action.payload];
                var y = b["attributes"][action.payload];
        
                if (typeof x == "string")
                {
                    x = (""+x).toLowerCase(); 
                }
                if (typeof y == "string")
                {
                    y = (""+y).toLowerCase();
                }
        
                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
            }), true);

            return sortedI;
        default:
            return state;
    }
};
