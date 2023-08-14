import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <div className="flex">
        <div className="basis-[12%] h-[100vh] border">
          <Sidebar />
        </div>
        <div className="basis-[88%] border ">
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
