
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login.jsx";
import Projects from "./pages/projects.jsx";
import Tasks from "./pages/tasks.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
