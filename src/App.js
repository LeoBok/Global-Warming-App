import './App.css';
import Main from './components/Main/Main'
import Temperature from './components/Temperature/Temperature'
import Sidebar from './components/Sidebar/Sidebar'
import { HashRouter, Routes, Route } from "react-router-dom";
import CarbonDioxide from './components/Carbon Dioxide/Carbon-dioxide';
import Methan from './components/Methan/Methan';
import NitrousOxide from './components/Nitrous Oxide/Nitrous-Oxide';
import PolarIce from './components/Polar Ice/Polar-ice';

function App() {
    return (
      <HashRouter basename='/'>
          <div className="App">
            <Sidebar />

            <Routes>
              <Route path='/' element={<Main />}/>
              <Route path='/temperature' element={<Temperature />} />
              <Route path='/carbon-dioxide' element={<CarbonDioxide />} />
              <Route path='/methan' element={<Methan />} />
              <Route path='/nitrous-oxide' element={<NitrousOxide />} />
              <Route path='/polar-ice' element={<PolarIce />} />
            </Routes>
          </div>
      </HashRouter>
    );
}

export default App;
