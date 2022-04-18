const deafultState = {
    item: null,
    loading: true
}

export const SET_ITEM = "SET_ITEM";
export const FETCH_ITEM = "FETCH_ITEM";

export const itemReduser = (state = deafultState, action) => {
    switch(action.type) {
        case SET_ITEM: 
            return {item: action.payload, loading: false}
        default:
            return {...state};
    }
}

export const fetchItem = (id) => ({type: FETCH_ITEM, payload: id});
export const setItem = (payload) => ({type: SET_ITEM, payload});