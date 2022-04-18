const deafultState = {
    groups: [],
    loading: true
}

export const SET_GROUPS = "SET_GROUPS";
export const FETCH_GROUPS = "FETCH_GROUPS";

export const groupReduser = (state = deafultState, action) => {
    console.log(action);
    switch(action.type) {
        case SET_GROUPS: 
            return {groups: action.payload, loading: false}
        default:
            return deafultState;
    }
}

export const setGroups = payload => ({type: SET_GROUPS, payload});
export const fetchGroups = () => ({type: FETCH_GROUPS});