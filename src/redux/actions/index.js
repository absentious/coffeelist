import firebase from 'firebase';

export const selectCafe = (cafeName) => {
    //console.log(cafeName);
    return {
        type: 'select',
        payload: cafeName
    };
};

export const clearCafe = () => {
    //console.log(cafeName);
    return {
        type: 'select',
        payload: ""
    };
};


export const cafeFetch = (city) => {
    //console.log("fetch start");
    return (dispatch) => {
        firebase.database().ref(`/${city}/`)
            .on('value', snapshot => {
                dispatch({ type: 'get_cafe_data', payload: snapshot.val() });
            }, error => {
                console.error(error);
            });
    };
};

export const listsort = (sortKey, nested) => {
    if (nested) {
        return {
            type: 'cafe_sort_inner',
            payload: sortKey
        }
    }
    else {
        return {
            type: 'cafe_sort',
            payload: sortKey
        }
    }
}

export const distsort = (lat, lng) => {
    return {
        type: 'cafe_sort_location',
        payload: { lat, lng }
    }
}

export const clearModalAttr = (attr, selection) => {
    return {
        type: 'clearModalAttr',
        payload: { attr: attr, selection: selection }
    }
}

export const selectModalAttr = (attr, selection) => {
    return {
        type: 'selectModalAttr',
        payload: { attr: attr, selection: selection }
    }
}

export const mapSelect = (cafeData) => {
    return {
        type: 'map_select',
        payload: cafeData
    }
}

export const mapClear = () => {
    return {
        type: 'map_clear',
        payload: ""
    }
}

export const addCafe = (cafeStructured, city) => {

    return (dispatch) => {
        console.log(cafeStructured);
        dispatch({ type: 'add_cafe' });
        firebase.database().ref(`/${city}/cafes`)
        .push(cafeStructured)
        .then(() => {
            dispatch({ type: 'add_cafe_done' });
        });
    };
};


export const openModal = () => {
    return {
        type: 'modal_open',
        payload: ""
    }
}

export const closeModal = () => {
    return {
        type: 'modal_close',
        payload: ""
    }
}


export const getLocation = (loc) => {
    return {
        type: 'get_location',
        payload: loc
    }
}

export const setLocation = (lat, lng) => {
    return {
        type: 'set_location',
        payload: { lat, lng }
    }
}