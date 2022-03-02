import React from 'react';
import Nav from './components/nav/index'
import Home from './pages/home/index'
import Posts from './pages/posts/index'
import Subscribers from './pages/subscribers/index'
import Contact from './pages/Contact/index'
import About from './pages/about/index'
import Footer from './components/Footer/index'
import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login/index'

import UserContext from './contexts/UserContext'

import { useState } from 'react'


const App = () => {

  const [user, setUser] = useState('')

  return (
    <div>
      <UserContext.Provider value={user}>
        <Nav />
        <Routes>
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='/' element={<Home />} />
          <Route path='posts' element={<Posts />} />
          <Route path='subscribers' element={<Subscribers />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='About' element={<About />} />
        </Routes>
        <Footer />

      </UserContext.Provider>
    </div>
  );
}

export default App;
