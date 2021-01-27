import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsReducer from "./dialog-reduser copy 3";
import profileReducer from "./profile-reduser copy";
import sidebarReducer from "./sidebar-reduser";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reduser";
import thunkMiddlewair from "redux-thunk"
import  {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reduser";
let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddlewair)));

window.__store__ = store;

export default store;