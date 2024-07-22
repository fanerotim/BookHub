import './Login.scss'

const Login = () => {
    return (

        <div className='login__container'>

            <section className='login__wrapper'>

                <div className='login__wrapper__info__container'>
                    <h1 className='login__wrapper__info__container__main__text'>Get full access to all functionalities on our website</h1>
                </div>

                <section className='login__form__container'>
                    <h1 className='login__form__heading'>Log in</h1>

                    <form className='login__form'>
                        <label className='login__form__label' htmlFor="">Email</label>
                        <input className='login__form__input' type="text" />

                        <label className='login__form__label' htmlFor="">Password</label>
                        <input className='login__form__input' type="password" />
                        
                        <button className='login__form__button'>Log in</button>
                    </form>
                </section>
                
            </section>

        </div>
    )
}

export default Login;