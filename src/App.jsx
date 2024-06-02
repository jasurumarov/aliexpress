import './scss/style.scss'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// Home
import Home from './pages/home/Home'
import Statistics from './pages/statistics/Statistics';
import Wishlist from './pages/wishlist/Wishlist'
import Cart from './pages/cart/Cart'

// Components
import Header from "./components/header/Header"
import Category from './components/category/Category'

function App() {
  return (
    <>
      <Header/>
      <Category/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='statistics' element={<Statistics/>}/>
        <Route path='wishlist' element={<Wishlist/>}/>
        <Route path='carts' element={<Cart/>}/>
      </Routes>

      <ToastContainer/>
    </>
  )
}

export default App
