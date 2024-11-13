import { useAuthContext } from '../../hooks/useAuthContext'
import './Header.scss'
import { Link, NavLink, useLocation } from 'react-router-dom'
import useLogout from '../../hooks/useLogout';
import { useState, useEffect } from 'react';

const Header = () => {

    const { auth } = useAuthContext();
    const { logout } = useLogout();
    const [show, setShow] = useState(false);

    const logoutHandler = () => {
        logout();
    }

    const url = useLocation().pathname;

    useEffect(() => {
        // close mobile navigation when url changes
        setShow(() => false)
    }, [url])

    useEffect(() => {
        // disable scroll when mobile nav opens
        if (show) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflowY = "auto"
            document.body.style.overflowX = "hidden"
        }
    }, [show])

    const toggleMenu = () => {
        setShow(() => !show);
    }

    const closeMenu = () => {
        setShow(() => !show)
    }

    return (
        <header className='navigation__container'>

            <Link to='/' className='navigation__logo navigation__item'>BookHub</Link>

            <div onClick={toggleMenu} className='hamburger__menu'>
                <span className="material-symbols-outlined">menu</span>
            </div>

            <ul className={'navigation' + (show ? '' : ' hidden')}>

                {show && <span onClick={closeMenu} className="material-symbols-outlined hamburger__menu--closer">close</span>}

                <div className='navigation__wrapper'>

                    <NavLink to='/' className='navigation__item'>Home</NavLink>
                    <NavLink to='/quotes' className='navigation__item'>Quotes</NavLink>
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