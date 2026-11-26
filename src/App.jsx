import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../src/pages/login'
import Projects from '../src/pages/projects'
import Tasks from '../src/pages/tasks'
import Team from '../src/pages/team'
import Clients from '../src/pages/clients'
import Dashboard from '../src/pages/dashboard'
import Calendar from '../src/pages/calendar'
import Settings from '../src/pages/settings'
function App() {
  return (
    <BrowserRouter>
     <Routes>
      
    <Route path="/" element={<Login />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/team" element={<Team />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/settings" element={<Settings />} />
      
     </Routes>
    </BrowserRouter>
   
  );
}

export default App;
