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
import BookDetails from './components/library/details/BookDetails'
import EditBook from './components/library/edit/EditBook'
import Profile from './components/profile/Profile'
import Error404 from './components/error404/error404'

function App() {

    const {auth} = useAuthContext();

    return (
        <div className='app'>
            <Header />

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={ auth ? <Navigate to='/'/> : <Login />}></Route>
                <Route path='/register' element={auth ? <Navigate to='/'/> : <Register />}></Route>
                <Route path='/add-book' element={auth ? <AddBook /> : <Navigate to='/login'/>}></Route>
                <Route path='/library' element={<Library/>}></Route>
                <Route path='/library/:bookId' element={<BookDetails/>}></Route>
                <Route path='/library/:bookId/edit' element={auth ? <EditBook/> : <Navigate to='/login'/>}></Route>
                <Route path='/profile' element={auth ? <Profile/> : <Navigate to='/login'/>}></Route>
                <Route path='*' element={<Error404/>}></Route>
            </Routes>

            <Footer />
        </div>
    )
}

export default App
