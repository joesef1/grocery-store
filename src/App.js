
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar.jsx';
import Terms from './pages/Terms.jsx';
import Footer from './components/Footer';
import FAQ from './pages/FAQ.jsx';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import CategoryBlog from './pages/CategoryBlog';
import BlogDetails from './pages/BlogDetails';
import Shop from './pages/Shop.jsx';
import Details from './pages/Details.jsx';
import Notfoundpage from './pages/Notfoundpage';
import CheckoutMultisteps from './components/CheckoutMultisteps';
import FilteredShop from './pages/FilteredShop.jsx';
import ThankYou from './pages/ThankYou';
import OrderHistory from './pages/OrderHistory.jsx';
import OrderDetails from './pages/user_order_history/OrderDetails';
import Welcome from './pages/welcome/Welcome';
import { ContexAuthState } from './context/context-authstate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from 'react-redux';
import React from 'react';
import store from './store/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <Provider store={store}>
      <ContexAuthState>
        <BrowserRouter>
          <ToastContainer />

          <Routes>
                
                <Route 
                path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/Terms" element={<Terms />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Shop" element={<Shop />} />
                <Route path="/Details" element={<Details />} />
                <Route path="/ThankYou" element={<ThankYou />} />
                <Route path="/FilteredShop" element={<FilteredShop />} />
                <Route path="/BlogDetails" element={<BlogDetails />} />
                <Route path="/CategoryBlog" element={<CategoryBlog />} />
                <Route path="/Notfoundpage" element={<Notfoundpage />} />
                <Route path="/CheckoutMultisteps" element={<CheckoutMultisteps />}/>
                <Route path="/OrderHistory" element={<OrderHistory />} />
                <Route path="/OrderDetails" element={<OrderDetails />} />

                <Route path="/Dashboard" element={<Dashboard />} />
    
                </Route>
      </Routes>
        </BrowserRouter>
      </ContexAuthState>
    </Provider>
  );
}

export default App;





























