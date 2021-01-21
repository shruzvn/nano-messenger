import * as actions from './actionTypes';

const initState = {
    darkMode: false,
    mobileView: false
};

function Reducer(state = initState, action = {type: null}){
    switch (action.type) {
        case actions.TOGGLE_DARKMODE:{
            return {
                ...state,
                darkMode: action.payload.state
            }
        }
        case actions.ENABLE_MOBILE_VIEW:{
            return {
                ...state,
                mobileView: action.payload.state
            }
        }
        default: {
            return state
        }
    }
}

export default Reducer;