import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Allproducts from './Allproducts'
import Auth from './Auth'
import AdminDashboard from './AdminDashboard'
import Add from './Add'
import ProductDetails from './ProductDetails'
import Landing from './Landing'
import Footer from './Footer'
import Buy from './Buy'
import {ToastContainer} from "react-toastify"
function App() {
 

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        closeOnClick={false}
        theme="colored"
      />
    <Routes>
     <Route path={"/home"} element={<Allproducts/>} />
      <Route path={"/"} element={<Landing/>} />
     <Route path={"/register"} element={<Auth insideregister={true} />} />
        <Route path={"/login"} element={<Auth />} />
          <Route path={"/admin"} element={<AdminDashboard />} />
           <Route path={"/add"} element={<Add />} />
              <Route path={"/view/:id"} element={<ProductDetails />} />
              <Route path={"/buy/7"} element={<Buy />} />
      </Routes>   
      <Footer/>
      
    </>
  )
}

export default App
