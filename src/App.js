import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import { Home, About, Contact, News, Store, Login, Register, Cart, ProductDetail, Shipping } from './pages/index'
import './scss/index.scss'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/store' element={<Store />}></Route>
            <Route path='/store/:id' element={<ProductDetail />}></Route>
            <Route path='/new' element={<News />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/cart/:id?' element={<Cart />}></Route>
            <Route path='/shipping' element={<Shipping />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

