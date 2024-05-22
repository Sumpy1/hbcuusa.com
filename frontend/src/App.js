import React from 'react';
import Home from './pages/Home'; // Corrected import path for Home
import About from './pages/About'; // Corrected import path for About
import Contribute from './pages/Contribute';
import Login from './pages/Login'; // Corrected import path for Login
import Hbcu from './pages/Hbcu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Map from './components/Map';
import Experience from './pages/Experience';



export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                  <Routes>
                    <Route path="/about" element={<About />} /> 
                    <Route path="/contribute" element={<Contribute />} />
                    <Route path="/signup" element={<Signup />} /> 
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} /> 
                    <Route path="/hbcu" element={<Hbcu />} /> 
                    <Route path="/map" element={<Map />} /> 
                    <Route path="/experience" element={<Experience />} /> 
                </Routes>
            
             
            </BrowserRouter>
        </div>
    );
}
