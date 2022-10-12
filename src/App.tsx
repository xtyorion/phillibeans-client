import { useEffect, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Login from './login/Login';
import Home from './home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
