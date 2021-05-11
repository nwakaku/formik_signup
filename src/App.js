import { UserProvider } from './userContext';
import React, { useState } from 'react';
import ComponentC from './components/ComponentC';
import Simpleform from './reducer_form/Simpleform';


function App() {
    
  return (
    <div className="App">
      <UserProvider>
        <Simpleform />
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
