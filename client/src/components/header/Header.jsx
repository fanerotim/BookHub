import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='navigation__container'>
            <ul className='navigation'>
                <div className='navigation__wrapper'>
                    <Link to='/' className='navigation__item'>Home</Link>
                    <Link to='/library' className='navigation__item'>Library</Link>
                    <Link to='/about' className='navigation__item'>About</Link>
                </div>

                <div className='navigation__wrapper'>
                    <Link to='/login' className='navigation__item'>Login</Link>
                    <Link to='/register' className='navigation__item'>Register</Link>
                </div>
            </ul>
        </header>
    )
}

export default Header;