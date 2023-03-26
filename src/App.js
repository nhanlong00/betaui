import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Layout from './components/Layout';
import { Home, About, Contact, News, Store, Login, Register, Cart, ProductDetail, Shipping, Search } from './pages/index'
import './scss/index.scss'

function App() {
  const keyword = useParams()

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='/search:keyword' element={<Search />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/store' element={<Store keyword={keyword} />}></Route>
            <Route path='/product/:id' element={<ProductDetail />}></Route>
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

