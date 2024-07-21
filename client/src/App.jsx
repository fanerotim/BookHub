import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
