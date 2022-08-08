import './App.css';
import Main from './components/Main/Main'
import Temperature from './components/Temperature/Temperature'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarbonDioxide from './components/Carbon Dioxide/Carbon-dioxide';
import Methan from './components/Methan/Methan';
import NitrousOxide from './components/Nitrous Oxide/Nitrous-Oxide';
import PolarIce from './components/Polar Ice/Polar-ice';

function App() {
    return (
      <Router>
        <div className="App">
          <Sidebar />

          <Routes>
            <Route path='/global-warming-app' element={<Main />}/>
            <Route path='/global-warming-app/temperature' element={<Temperature />} />
            <Route path='/global-warming-app/carbon-dioxide' element={<CarbonDioxide />} />
            <Route path='/global-warming-app/methan' element={<Methan />} />
            <Route path='/global-warming-app/nitrous-oxide' element={<NitrousOxide />} />
            <Route path='/global-warming-app/polar-ice' element={<PolarIce />} />
          </Routes>
        </div>
      </Router>
      
    );
}

export default App;
