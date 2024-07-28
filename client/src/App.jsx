import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import Register from './components/register/Register'
import { Routes, Route } from 'react-router-dom'
import { Logout } from './components/logout/Logout'
import AddBook from './components/add-book/AddBook'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='add-book' element={<AddBook/>}></Route>
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
