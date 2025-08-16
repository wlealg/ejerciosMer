import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu.jsx';
import Ejercicio1 from './components/Ejercicio1.jsx';
import Ejercicio2 from './components/Ejercicio2.jsx';
import Ejercicio3 from './components/Ejercicio3.jsx';
import Ejercicio4 from './components/Ejercicio4.jsx';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/ejercicio1" element={<Ejercicio1 />} />
          <Route path="/ejercicio2" element={<Ejercicio2 />} />
          <Route path="/ejercicio3" element={<Ejercicio3 />} />
          <Route path="/ejercicio4" element={<Ejercicio4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
