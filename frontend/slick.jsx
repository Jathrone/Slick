import React from "react"
import ReactDOM from "react-dom"
import Root from "./components/root"
import * as sessionActions from "./actions/session_actions";
import configureStore from "./store/store"
import * as workspaceActions from "./actions/workspaces_actions";


document.addEventListener("DOMContentLoaded", ()=> {
    // here we load both currentUser and allCurrentUsers into state
    let store;
    let preloadedState = {};
    if (window.allCurrentUsers) {
        let users = {};
        Object.values(window.allCurrentUsers).forEach((user) => {
            users[user.id] = user;
        })
        let workspaces = {};
        Object.values(window.allActiveWorkspaces).forEach((workspace) => {
            workspaces[workspace.id] = workspace;
        })
        preloadedState = {
            entities: {
                workspaces,
                users
            },
            // the mapping here is important because Object.keys are Property names
            // https://stackoverflow.com/questions/37528076/why-object-keys-is-returns-array-of-string-instead-of-array-of-numbers
            session: { allCurrentUsersIds: Object.keys(window.allCurrentUsers).map(Number) }
        };
        delete window.allCurrentUsers;
        delete window.allActiveWorkspaces;
    }
    store = configureStore(preloadedState);
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
})