import React from 'react';
import Home from './pages/Home'; // Corrected import path for Home
import About from './pages/About'; // Corrected import path for About
import Contribute from './pages/Contribute';
import Hbcu from './pages/Hbcu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes> 
                    <Route path="/about" element={<About />} /> {/* Updated route configuration */}
                    <Route path="/contribute" element={<Contribute />} />
                    <Route path="/signup" element={<Signup />} /> {/* Default route */}
                    <Route path="/" element={<Home />} /> {/* Default route */}
                    <Route path="/hbcu" element={<Hbcu />} /> {/* Default route */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}
