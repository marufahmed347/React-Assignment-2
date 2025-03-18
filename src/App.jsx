import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css'
import NavbarArea from "./components/Navbar";
import Dashboard from "./components/all-pages/dashboard/Dashboard";
import Incidents from "./components/all-pages/incidents/Incidents";
import Locations from "./components/all-pages/locations/Locations";
import Incidents2 from "./components/all-pages/incidents/incidents2/Incidents-2";
import Incidents3 from "./components/all-pages/incidents/incidents3/Incidents-3";
import Activities from "./components/all-pages/activities/Activities";
import Documents from "./components/all-pages/documents/Documents";
import Incidents4 from "./components/all-pages/incidents/incidents4/Incidents-4";
import CypherAI from "./components/all-pages/cypher-ai/Cypher-AI";
import Incidents5 from "./components/all-pages/incidents/incidents5/Incidents-5";

function App() {

  return (
    <div className='max-w-[1440px] mx-auto'>
      <Router>
        <NavbarArea/>

        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/Incidents' element={<Incidents/>} />
          <Route path='/Locations' element={<Locations/>} />
          <Route path='/Activities' element={<Activities/>} />
          <Route path='/Documents' element={<Documents/>} />
          <Route path='/Cypher AI' element={<CypherAI/>} />
          

          <Route path="/incidents1" element={<Incidents2/>}/>
          <Route path="/incidents2" element={<Incidents3/>}/>
          <Route path="/incidentsnext3" element={<Incidents4/>}/>
          <Route path="/incidentsback3" element={<Incidents2/>}/>
          <Route path="/incidentsnext4" element={<Incidents5/>}/>
          <Route path="/incidentsback4" element={<Incidents3/>}/>
          <Route path="/incidentsback5" element={<Incidents4/>}/>

        </Routes>

        
      </Router>
    </div>
  )
}

export default App
