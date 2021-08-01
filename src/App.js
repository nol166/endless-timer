import React from 'react'
import logo from './logo.svg'
import Bubble from './components/Bubble'
import Header from './components/Header'
import Timer from './components/Timer'
import './App.css'

function App() {
  return (
    <div className="container p-6 md:p-16 max-w-3xl">
      <Header />
      <Bubble logo={logo} />
      <Timer />
    </div>
  )
}

export default App
