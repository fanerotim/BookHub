import { useAuthContext } from '../../hooks/useAuthContext'
import './Header.scss'
import { Link, NavLink } from 'react-router-dom'
import useLogout from '../../hooks/useLogout';
import { useState } from 'react';

const Header = () => {

    const { auth } = useAuthContext();
    const { logout } = useLogout();
    const [show, setShow] = useState(false);

    const logoutHandler = () => {
        logout();
    }

    const toggleMenu = () => {
        setShow(() => !show);
    }

    return (
        <header className='navigation__container'>


            <div onClick={toggleMenu} className='hamburger__menu'>
                <span class="material-symbols-outlined">menu</span>
            </div>

            <ul className={'navigation' + (show ? ' hidden' : '')}>

                <Link to='/' className='navigation__logo navigation__item'>BookHub</Link>

                <div className='navigation__wrapper'>
                    <NavLink to='/' className='navigation__item'>Home</NavLink>
                    <NavLink to='/library' className='navigation__item'>Library</NavLink>
                    {auth &&
                        <>
                            <NavLink to='/add-book' className='navigation__item'>Add a book</NavLink>
                            <NavLink to='/profile' className='navigation__item'>Profile</NavLink>
                        </>
                    }
                </div>

                <div className='navigation__wrapper'>
                    {auth
                        ? (
                            // <NavLink to='/logout' className='navigation__item'>Logout</NavLink>
                            <button onClick={logoutHandler} className='navigation__item'>Logout</button>
                        )
                        :
                        (
                            <>
                                <NavLink to='/login' className='navigation__item'>Login</NavLink>
                                <NavLink to='/register' className='navigation__item'>Register</NavLink>
                            </>
                        )}
                </div>
            </ul>
        </header>
    )
}

export default Header;