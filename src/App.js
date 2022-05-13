import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Index from './Index/Index'
import NavBar from './NavBar/NaveBar'
import Contact from './Contact/ContactPage'

class App extends Component {

  render() {
    return (
      <BrowserRouter>

        <NavBar />
        <Routes>
          <Route exact path="/React-Project-1/" element={<Index />} />
          <Route path="/React-Project-1/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
