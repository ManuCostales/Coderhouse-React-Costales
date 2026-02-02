//Inicializar con "rafce" + TAB


import React from 'react'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { Home } from './components/Home/Home'
import { Acerca } from './components/Acerca/Acerca'
import { Trabajos } from './components/Trabajos/Trabajos'
import { Error } from './components/Error/Error'
import MainContainer from './components/MainContainer/MainContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import './styles/main.scss'


const App = () => {

  return (
    <>

      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>

          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/acerca" element={<Acerca></Acerca>}></Route>
          <Route path="/trabajos" element={<Trabajos></Trabajos>}></Route>
          <Route path="/trabajos/:idCategory" element={<Trabajos></Trabajos>}></Route>
          <Route path="/trabajos/:idCategory/:id" element={<ItemDetailContainer></ItemDetailContainer>}></Route>

        </Routes>

        <Footer></Footer>
      
      </BrowserRouter>

      

      

    </>

  )
}

export default App