import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css'
import NavbarArea from "./components/Navbar";
import Dashboard from "./components/all-pages/dashboard/Dashboard";
import Incidents from "./components/all-pages/incidents/Incidents";
import Locations from "./components/all-pages/locations/Locations";
import Activities from "./components/all-pages/activities/Activities";
import Documents from "./components/all-pages/documents/Documents";
import CypherAI from "./components/all-pages/cypher-ai/Cypher-AI";

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
          
        </Routes>

        
      </Router>
    </div>
  )
}

export default App
