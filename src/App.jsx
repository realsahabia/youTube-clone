import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Watch from './pages/Watch.jsx'
import Search from './pages/Search.jsx'
import Navbar from './components/Navbar.jsx'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/watch/:id' element={<Watch />}></Route>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
    )
}

export default App