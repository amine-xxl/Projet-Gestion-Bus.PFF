import React from 'react'
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import "./index.css"

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* BACH DIR TEST L NAVBAR W FOOTER DIR "lorem*123" + ENTRER */}
      <Footer />
    </div>
  )
}