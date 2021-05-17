import { UserProvider } from './userContext';
import React from 'react';
// import ComponentC from './components/ComponentC';
import Formatic from './formik/Formatic'
import Dashboard from './formik/Dashboard'
import Update from './formik/Update'
import Login from './formik/Login'
import PrivateRoute from "./formik/PrivateRoute";
import PasswordReset from "./formik/PasswordReset";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


function App() {
    
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <Switch>
          <PrivateRoute path='/update' component={Update} />
          <PrivateRoute exact path='/' component={Dashboard} />
            <Route path='/formatic' component={Formatic} />
            <Route path='/login' component={Login} />
            <Route path='/passwordReset' component={PasswordReset} />
          </Switch>
      </UserProvider>
      </Router>
      
    </div>
  );
}

export default App;
