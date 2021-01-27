import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Route, Switch, withRouter} from "react-router-dom";

import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {WithSuspens} from "./hoc/withSuspens";
import {initializeApp} from "./redux/app-reduser";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Switch>
                    <Route path='/dialogs'
                           render={WithSuspens(DialogsContainer)}/>

                    <Route path='/profile/:userId?'
                           render={WithSuspens(ProfileContainer)}/>

                    <Route path='/users'
                           render={() => <UsersContainer/>}/>

                    <Route path='/login'
                           render={() => <LoginPage/>}/>

                    <Route path='*'
                           render={() => <div>404 NOT FOUND </div>}/>
                </Switch>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp;
