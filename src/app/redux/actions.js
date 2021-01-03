import * as actions from './actionTypes';

export const toggleDarkMode = (state) => ({
    type: actions.TOGGLE_DARKMODE,
    payload: {
        state
    }
});

export const enableMobileView = (state) => ({
    type: actions.ENABLE_MOBILE_VIEW,
    payload: {
        state
    }
});