import { Route, Redirect} from "react-router-dom";
import React from "react";

export const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }: any) => {
    return (
        <Route {...rest} render={(props) => (
            isLoggedIn
                ? <Component {...props} />
                : <Redirect to='/login' />
        )} />
    )
}

export const AuthRoute = ({ component: Component, isLoggedIn, ...rest }: any) => {
    return (
        <Route render={() => (
            !isLoggedIn
                ? <Component pageType={rest.props.pageType}/>
                : <Redirect to='/home' />
        )} />
    )
}

