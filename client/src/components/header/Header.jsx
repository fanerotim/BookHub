import './Header.scss'

const Header = () => {
    return (
        <header>
            <ul className="navigation">
                <div>
                    <li>Home</li>
                    <li>Collection</li>
                    <li>About</li>
                </div>

                <div>
                    <li>Login</li>
                    <li>Register</li>
                </div>
            </ul>
        </header>
    )
}

export default Header;