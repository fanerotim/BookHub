import './Header.scss'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='navigation__container'>
            <ul className='navigation'>
                <Link to='/' className='navigation__logo navigation__item'>BookHub</Link>
                <div className='navigation__wrapper'>
                    <NavLink to='/' className='navigation__item'>Home</NavLink>
                    <NavLink to='/library' className='navigation__item'>Library</NavLink>
                    <NavLink to='/about' className='navigation__item'>About</NavLink>
                </div>

                <div className='navigation__wrapper'>
                    <NavLink to='/login' className='navigation__item'>Login</NavLink>
                    <NavLink to='/register' className='navigation__item'>Register</NavLink>
                </div>
            </ul>
        </header>
    )
}

export default Header;