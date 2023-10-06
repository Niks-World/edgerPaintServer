import logo from './logo.svg';
import './App.css';

import { AllRoutes } from './componet/AllRoutes/AllRoutes';
import { NavBar } from './componet/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AllRoutes/>
    </div>
  );
}

export default App;
