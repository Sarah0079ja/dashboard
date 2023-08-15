import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="flex">
        <div className="basis-[12%] h-[100vh] border">
          <Sidebar />
        </div>
        <div className="basis-[88%] border h-[100vh] overflow-scroll ">
          <Dashboard />
          <div>
            <Outlet> </Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
