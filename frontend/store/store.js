import { createStore, applyMiddleware} from "redux";
// import logger from "redux-logger";
// #TODO take out before production
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";


// #TODO since we specified preloadedState in slick.jsx, do we still need default here?
const configureStore = (preloadedState={}) => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk)
    )
)

export default configureStore;