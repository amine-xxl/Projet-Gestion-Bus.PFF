import React, { useState } from 'react'
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import "./index.css"
import Home from './components/Home'
import News from './components/News'
import Contact from './components/Contact'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import About from './components/About';

export default function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className='App'>

      {/* Navbar */}
      <Navbar openLogin={() => setShowLogin(true)} />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/About" element={<About />} />
      </Routes>

      {/* Login Popup */}
      <Login 
        show={showLogin} 
        onClose={() => setShowLogin(false)} 
      />

      {/* Footer */}
      <Footer />

    </div>
  )
}