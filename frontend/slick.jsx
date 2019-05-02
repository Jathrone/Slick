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
    window.fetchWorkspaceByName = workspaceActions.fetchWorkspaceByName;
    window.signup = sessionActions.signup;
    window.login = sessionActions.login;
    window.logout = sessionActions.logout;
    window.otherLogout = sessionActions.otherLogout;
    window.activateSession = sessionActions.activateSession;
    // testing end


    // here we load both currentUser and allCurrentUsers into state
    let store;
    let preloadedState = {};
    if (window.allCurrentUsers) {
        let users = {};
        Object.values(window.allCurrentUsers).forEach((user) => {
            users[user.id] = user;
        })
        preloadedState = {
            entities: {
                users
            },
            // the mapping here is important because Object.keys are Property names
            // https://stackoverflow.com/questions/37528076/why-object-keys-is-returns-array-of-string-instead-of-array-of-numbers
            session: { allCurrentUsersIds: Object.keys(window.allCurrentUsers).map(Number) }
        };
        // delete window.allCurrentUsers;
    }
    if (window.currentUser) {
        preloadedState.session.currentUserId = window.currentUser.id 
        delete window.currentUser;
    }
    store = configureStore(preloadedState);

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
})