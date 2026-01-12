//Inicializar con "rafce" + TAB


import React from 'react'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import "./App.css"
import './styles/main.scss'


const App = () => {

  return (
    <>

      <NavBar></NavBar>

      <ItemListContainer mensaje="Este es el Contenedor" mensaje2="Este es el segundo mensaje"></ItemListContainer>

      <Footer></Footer>

    </>

  )
}

export default App