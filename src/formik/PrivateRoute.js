import React,{ useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../userContext';

export default function PrivateRoute({ component: Component, ...rest}) {
    const { users } = useContext(UserContext)

    return (
        <Route
            {...rest}
            render={props => {
                return !users ? <Component {...props} /> : <Redirect to="/login" />
            }}>   
        </Route>
    )
}
