import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link as RouterLink, Redirect} from "react-router-dom";
import {createStore, State, useStoreActions, useStoreState} from "easy-peasy";
import {AuthRoute, PrivateRoute} from "./Shared/PrivateRoute";
import {AuthPage} from "./Pages/AuthPage";
import {HomePage} from "./Pages/HomePage";
import {HeaderComponent} from "./Components/HeaderComponent";
import {ProfilePage} from "./Pages/ProfilePage";
import {AuthService} from "./Services/AuthService";


function App() {
    const userStore = useStoreState((state: any) => state.user)
    const globalLock = useStoreState((state: any) => state.globalLock)
    const verifyUserStatus = useStoreActions((actions: any) => actions.verifyUserStatus)
    const setGlobalLock = useStoreActions((actions: any) => actions.setGlobalLock)

    useEffect(() => {
        setGlobalLock(true)
        if (userStore.token) {
            verifyUserStatus(userStore.token)
        }
        else setGlobalLock(false)
    }, [])


    const app = () => {
        return (
            <Router>
                <HeaderComponent/>
                <div className='App'>
                    <Switch>
                        <PrivateRoute path='/home' isLoggedIn={userStore.isLoggedIn} component={HomePage}/>
                        <AuthRoute path='/login' component={AuthPage} isLoggedIn={userStore.isLoggedIn}
                                   props={{pageType: 'login'}}/>
                        <AuthRoute path='/register' component={AuthPage} isLoggedIn={userStore.isLoggedIn}
                                   props={{pageType: 'register'}}/>
                        <PrivateRoute path='/profile' component={ProfilePage} isLoggedIn={userStore.isLoggedIn}/>
                        <Redirect to='/home' />
                    </Switch>
                </div>

            </Router>
        )
    }

    return (!globalLock ? app() : null);
}

export default App;
