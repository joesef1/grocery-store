import React, { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';
import FAQ from './pages/FAQ.jsx';
import { ContexAuthState } from './context/context-authstate';


function App() {

  return (
    <ContexAuthState>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
    <Footer />

    </BrowserRouter>
    </ContexAuthState>
  );
}

export default App;
