import { UserProvider } from './userContext';
import React from 'react';
// import ComponentC from './components/ComponentC';
import Formatic from './formik/Formatic'


function App() {
    
  return (
    <div className="App">
      <UserProvider>
        <Formatic />
        {/* <ComponentC /> */}
      </UserProvider>
    </div>
  );
}

export default App;
