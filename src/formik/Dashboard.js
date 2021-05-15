import React, {useContext, useState} from 'react';
import { Link, useHistory } from "react-router-dom"
import { UserContext } from '../userContext';


const Dashboard = () => {
    const {signout, users} = useContext(UserContext);
    const history = useHistory();


    const handleSignout = () => {
        signout();
        history.push('/formatic');
      };

    return (
        <div>
            <h2>
            {users.kite.displayName}<br />
            {users.kite.email}
            </h2>
            <button onClick={handleSignout}>Log Out</button>
        </div>
    )
}

export default Dashboard
