import React from "react"
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { Toaster } from "react-hot-toast"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
// import PrivateRoute from "./components/PrivateRoute"

function App() {
  const PrivateRoute = () => {
    const token = localStorage.getItem('token');
    return token ? <Outlet /> : <Navigate to='/' />;
  };

  return (
    <>
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          fontSize: '1.8 rem',
        },
      }}
      />
      <Routes>
        <Route element={<PrivateRoute/>}>
          <Route path="/home" element={<Home/>}/>
        </Route>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
