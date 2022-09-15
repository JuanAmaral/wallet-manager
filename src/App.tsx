import React from 'react';
import {
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Withdraw from './pages/Withdraw';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/" element={<Login />} />
      <Route path="/saque/" element={<Withdraw />} />
    </Routes>
  );
}

export default App;
