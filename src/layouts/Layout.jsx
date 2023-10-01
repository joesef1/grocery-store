// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import  Breadcrumbs  from '../components/dashboard/Breadcrumbs';


const Layout = () => {
  return (
    <div>
      <Navbar />
      <Breadcrumbs />

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
