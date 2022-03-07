import React from 'react';

import Nav from './components/nav/index'
import Footer from './components/Footer/index'

import Login from './pages/Login/index'
import Home from './pages/home/index'
import Posts from './pages/posts/index'
import Subscribers from './pages/subscribers/index'
import Contact from './pages/Contact/index'


import { Routes, Route } from 'react-router-dom'

import UserContext from './contexts/UserContext'

import { useState } from 'react'

import '../src/App.css'


const App = () => {

  const [user, setUser] = useState('')

  return (
    <div id='main-div'>
      <div id='content-div'>
      <UserContext.Provider value={user}>
        <Nav />
        <Routes>
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='/' element={<Home />} />
          <Route path='posts' element={<Posts />} />
          <Route path='subscribers' element={<Subscribers />} />
          <Route path='Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;
