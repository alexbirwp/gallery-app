const deafultState = {
    item: null,
    loading: true
}

export const SET_ITEM = "SET_ITEM";
export const FETCH_ITEM = "FETCH_ITEM";

export const itemReduser = (state = deafultState, action) => {
    switch(action.type) {
        case "": 
            return {item: action.payload, loading: false}
        default:
            return deafultState;
    }
}

export const fetchItem = (id) => ({type: FETCH_ITEM, payload: id});
export const setItem = (payload) => ({type: FETCH_ITEM, payload});