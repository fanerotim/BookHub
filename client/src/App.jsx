import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import Register from './components/register/Register'
import { Routes, Route, Navigate } from 'react-router-dom'
import AddBook from './components/add-book/AddBook'
import { useAuthContext } from './hooks/useAuthContext'
import Library from './components/library/Library'

function App() {

    const {auth} = useAuthContext();

    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={ auth ? <Navigate to='/'/> : <Login />}></Route>
                <Route path='/register' element={auth ? <Navigate to='/'/> : <Register />}></Route>
                <Route path='/add-book' element={auth ? <AddBook /> : <Navigate to='/login'/>}></Route>
                <Route path='/library' element={<Library/>}></Route>
            </Routes>

            <Footer />
        </>
    )
}

export default App
