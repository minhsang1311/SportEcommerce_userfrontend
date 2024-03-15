import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import { Wishlist } from './pages/Wishlist';
import Login from './pages/Login';
import { ForgotPassword } from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import UserInfo from './pages/UserInfo';


function App() {
  return (
      <><BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />   
          <Route path='login' element={<Login />} />
          <Route path='user-info' element={<UserInfo />} />
          <Route path='sign-up' element={<SignUp/>} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
          <Route path='wishlist' element={<Wishlist/>}/>
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
