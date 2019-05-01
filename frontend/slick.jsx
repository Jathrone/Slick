import React from "react"
import ReactDOM from "react-dom"
import Root from "./components/root"
import * as sessionActions from "./actions/session_actions";
import configureStore from "./store/store"
import * as workspaceActions from "./actions/workspaces_actions";


document.addEventListener("DOMContentLoaded", ()=> {
    // testing start
    window.createWorkspace = workspaceActions.createWorkspace;
    window.fetchWorkspace = workspaceActions.fetchWorkspace;
    window.signup = sessionActions.signup;
    window.login = sessionActions.login;
    window.logout = sessionActions.logout;
    // testing end

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUserId: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
})