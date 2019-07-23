export const RECEIVE_AUTH_PAGE_UI = "RECEIVE_AUTH_PAGE_UI";
export const ClEAR_AUTH_PAGE_UI = "CLEAR_AUTH_PAGE_UI";

export const receiveAuthPageUi = (payload) => ({
    type: RECEIVE_AUTH_PAGE_UI,
    payload
})

export const clearAuthPageUi = () => ({
    type: ClEAR_AUTH_PAGE_UI
})