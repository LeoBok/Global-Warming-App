import './App.css';
import Main from './pages/Main/Main'
import TemperatureAnomalies from './pages/TemperaturePage/Temperature-anomalies'
import Sidebar from './pages/Sidebar/Sidebar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarbonDioxide from './pages/CarbonDioxPage/Carbon-dioxide';
import Methan from './pages/MethanPage/Methan';
import NitrousOxide from './pages/NitrousOxidePage/Nitrous-Oxide';
import PolarCapsMelting from './pages/PolarCapsPage/Polar-caps-melting';
import SingleNews from './pages/Global Warming News/SingleNews'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const client = new QueryClient();
    return (
        <QueryClientProvider client={client}>
          <Router>
            <div className="App rounded-4 m-1 m-sm-2 m-md-4 d-lg-flex">
            <Sidebar />
            <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='temperature-anomalies' element={<TemperatureAnomalies/>} />
              <Route path='carbon-dioxide' element={<CarbonDioxide/>} />
              <Route path='methan' element={<Methan/>} />
              <Route path='nitrous-oxide' element={<NitrousOxide/>} />
              <Route path='polar-caps-melting' element={<PolarCapsMelting/>} />
              <Route path='global-warming-news/:singleNewsId' element={<SingleNews />} />
            </Routes>
            </div>
          </Router>
        </QueryClientProvider>
    );
}

export default App;
