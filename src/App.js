import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import './styles/App.css'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Login/>} />
        <Route path='/home'element={<Home/>} />
        <Route path='/dashboard'element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App