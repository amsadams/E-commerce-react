import React from 'react'
import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from './Components/Admin/AdminLogin';
import Home from './Pages/Home'
import Analytics from './Components/DashBoard/Analytics';
import CategoryManagement from './Components/DashBoard/CategoryManagement';
import DashHome from './Components/DashBoard/DashHome'
import OrderSummary from './Components/DashBoard/OrderSummary';
import Login from './Components/User/Login';
import SignUp from './Components/User/SignUp';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ProductManagement from './Components/DashBoard/ProductManagement';
import UserManagement from './Components/DashBoard/UserManagement';
import CouponManagement from './Components/DashBoard/CouponManagement';
import SimplePaper from './Components/DashBoard/Demo/demologin';
import ParticlesHandler from './Components/Application/ParticlesHandler';
import NavBar from './Components/Application/NavBar/NavBar';
import TemporaryDrawer from './Components/Application/NavBar/Drawer/Drawer';

function App() {
  return (




    <Router>
      <Routes>

        <Route exact path="/" element={<Home />}>

        </Route>

        <Route exact path="/signup" element={<SignUp />} />

        <Route exact path="/nav" element={<NavBar />} />

        <Route exact path="/draw" element={<TemporaryDrawer />} />

        <Route path="login" element={<Login />} />

        <Route exact path="*" element={<Home />} />

        <Route exact path="/demologin" element={<SimplePaper />} />

        <Route exact path="/part" element={<ParticlesHandler />} />


        <Route exact path="/adminlogin" element={<AdminLogin />}>
        </Route>

          <Route path="/admin" element={<DashHome />}>

          <Route index element={<OrderSummary />} />

          <Route path="analytics" element={<Analytics />} />

          <Route path="categories" element={<CategoryManagement />} />

          <Route path="products" element={<ProductManagement />} />

          <Route path="order" element={<OrderSummary />} />

          <Route path="users" element={<UserManagement />} />

          <Route path="coupons" element={<CouponManagement />} />

        </Route>
      </Routes>
    </Router>







  )
}

export default App