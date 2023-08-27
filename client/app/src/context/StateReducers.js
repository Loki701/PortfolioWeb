import { reducerCases } from "./constants";

export const initialState = {
    activeNav: undefined
};


const reducer = (state, action) =>{
    switch(action.type){
        case reducerCases.SET_ACTIVE_NAV:
            return{
                ...state,
                activeNav: action.activeNav
            }
        default:
            return state;
    }
};

export default reducer;