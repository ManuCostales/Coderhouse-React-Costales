//Inicializar con "rafce" + TAB


import React from 'react'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { Home } from './components/Home/Home'
import { Acerca } from './components/Acerca/Acerca'
import { Trabajos } from './components/Trabajos/Trabajos'
import { NotFound404 } from './components/NotFound404/NotFound404'
import { Cart } from './components/Cart/Cart'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Checkout } from './components/Checkout/Checkout'
import { CarritoProvider } from './context/CarritoContext'
import "./App.css"
import './styles/main.scss'
import { ToastContainer } from 'react-toastify'
import { AnimatePresence } from "framer-motion";
import "react-toastify/dist/ReactToastify.css"


//Uso de framer motion para animar cuando entra y sale un componente:
const AnimatedRoutes = () => {

  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      
    </AnimatePresence>
  )

}

const App = () => {

  return (
    <>

      <BrowserRouter>
        <CarritoProvider>
          <ToastContainer />
          <NavBar></NavBar>
              
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/acerca" element={<Acerca />} />
              <Route path="/trabajos" element={<Trabajos />} />
              <Route path="/trabajos/:idCategory" element={<Trabajos />} />
              <Route path="/trabajos/:idCategory/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound404/>} />
            </Routes>

            </CarritoProvider>

            <Footer></Footer>
        
      </BrowserRouter>      

    </>

  )
}

export default App