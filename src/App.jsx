import React from 'react'
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import "./index.css"
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}