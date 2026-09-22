import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAFAFC] text-[#0F172A] font-sans antialiased selection:bg-[#F3E8FF] selection:text-[#6D28D9]">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
