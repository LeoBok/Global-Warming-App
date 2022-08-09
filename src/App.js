import './App.css';
import Main from './components/Main/Main'
import TemperatureAnomalies from './components/Temperature anomalies/Temperature-anomalies'
import Sidebar from './components/Sidebar/Sidebar'
import { HashRouter, Routes, Route } from "react-router-dom";
import CarbonDioxide from './components/Carbon Dioxide/Carbon-dioxide';
import Methan from './components/Methan/Methan';
import NitrousOxide from './components/Nitrous Oxide/Nitrous-Oxide';
import PolarCapsMelting from './components/Polar Caps Melting/Polar-caps-melting';

function App() {
    return (
      <HashRouter basename='/'>
          <div className="App">
            <Sidebar />

            <Routes>
              <Route path='/' element={<Main />}/>
              <Route path='/temperature' element={<TemperatureAnomalies />} />
              <Route path='/carbon-dioxide' element={<CarbonDioxide />} />
              <Route path='/methan' element={<Methan />} />
              <Route path='/nitrous-oxide' element={<NitrousOxide />} />
              <Route path='/polar-caps-melting' element={<PolarCapsMelting />} />
            </Routes>
          </div>
      </HashRouter>
    );
}

export default App;
