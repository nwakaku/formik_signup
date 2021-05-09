import { UserProvider } from './userContext';
import ComponentC from './components/ComponentC';

function App() {
  return (
    <div className="App">
      <UserProvider value = "Wisdom">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
