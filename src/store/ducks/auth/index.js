import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_SATE  = {
    authorized: false,
    token: '',
}

export const setAuthotized = createAction('AUTH_SET_AUTHORIZED');
export const setToken = createAction('AUTH_SET_TOKEN');

export default createReducer(INITIAL_SATE, {
    [setAuthotized.type]: (state, action) => ({
        ...state, 
        authorized: action.payload,
    }),
    [setToken.type]: (state, action) => ({
        ...state, 
        token: action.payload,
    }),
})