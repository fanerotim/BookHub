import './Header.scss'

const Header = () => {
    return (
        <header className='navigation__container'>
            <ul className='navigation'>
                <div className='navigation__wrapper'>
                    <li className='navigation__item'>Home</li>
                    <li className='navigation__item'>Library</li>
                    <li className='navigation__item'>About</li>
                </div>

                <div className='navigation__wrapper'>
                    <li className='navigation__item'>Login</li>
                    <li className='navigation__item'>Register</li>
                </div>
            </ul>
        </header>
    )
}

export default Header;