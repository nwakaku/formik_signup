import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../userContext';


const PrivateRoute = ({ component: Component, ...rest}) => {
    const { users } = useContext(UserContext);

    return (
        <Route 
            {...rest}
            render ={props => {
            return users ? <Component {...props} /> : <Redirect to="/
            login" />
            }}>
            
        </Route>
    )
}

export default PrivateRoute
