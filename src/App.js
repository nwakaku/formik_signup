import { UserProvider } from './userContext';
import React from 'react';
// import ComponentC from './components/ComponentC';
import Formatic from './formik/Formatic'
import Dashboard from './formik/Dashboard'
import Login from './formik/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
    
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/formatic' component={Formatic} />
            <Route path='/login' component={Login} />
          </Switch>
      </UserProvider>
      </Router>
      
    </div>
  );
}

export default App;
