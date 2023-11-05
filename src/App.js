import './App.css';
import React from 'react';
// import { Link, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Dextop from './components/Dextop';
import Home from './components/Home';
import Mobile from './components/Mobile';
import Navbar from './components/Navbar';
import { BrowserRouter as Routers , Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className="fullbodycontainer">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Dextop" element={<Dextop />} />
          <Route path="/Mobile" element={<Mobile />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
  );
}

export default App;