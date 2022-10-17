import { Routes, Route, Link } from "react-router-dom";
import Login from './login/Login';
import Home from './home/Home';
import Dashboard from './dashboard/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
