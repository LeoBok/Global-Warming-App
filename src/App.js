import './App.css';
import Main from './components/Main/Main'
import Temperature from './components/Temperature/Temperature'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
      <Router>
        <div className="App">
          <Sidebar />

          <Routes>
            <Route path='/global-warming-app' element={<Main />}/>
            <Route path='/global-warming-app/temperature' element={<Temperature />} />
          </Routes>
        </div>
      </Router>
      
    );
}

export default App;
