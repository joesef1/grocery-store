import React, { useState, useEffect } from 'react';

//
import store from './store/store';
import { Provider } from 'react-redux';

//


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar.jsx';
import Terms from './pages/Terms.jsx';
import Footer from './components/Footer';
import FAQ from './pages/FAQ.jsx';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Shop from './pages/Shop.jsx';
import { ContexAuthState } from './context/context-authstate';


function App() {

  return (
    <Provider store={store}>
    <ContexAuthState>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    {/* <Footer /> */}
    </BrowserRouter>
    </ContexAuthState>
    </Provider>

  )
}

export default App;
