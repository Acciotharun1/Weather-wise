import React, { useState } from 'react'
import Header from './Components/Header'
import Search from './Components/Search'
import Weathercard from './Components/Weathercard'
import Footer from './Components/Footer'
import './App.css'

function App() {
  const [weatherdetails, setweatherdetails] = useState(null)

  return (
    <div className='app'>
      <div className='app-container'>
        <Header />
        <Search setweatherdetails={setweatherdetails} />
        {weatherdetails && <Weathercard weatherdetails={weatherdetails} />}
        <Footer />
      </div>
    </div>
  )
}

export default App
