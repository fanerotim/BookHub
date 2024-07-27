import useForm from '../../hooks/useForm'
import './Login.scss'
import { Link, useNavigate } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Login = () => {
    const login = useLogin();
    const navigate = useNavigate(); 
    
    const { values, handleChange } = useForm({
        email: '',
        password: ''
    })

    async function handleSubmit(e) {
        e.preventDefault();

        // make a request to the API
        await login(values)
        // redirect on success
        navigate('/')
    }

    return (

        <div className='login__container'>

            <section className='login__wrapper'>

                <div className='login__wrapper__info__container'>
                    <h1 className='login__wrapper__info__container__main__text'>Get full access to all functionalities on our website</h1>
                </div>


                <section className='login__form__container'>

                    <h1 className='login__form__heading'>Log in</h1>

                    <form className='login__form' onSubmit={handleSubmit}>
                        <label className='login__form__label' htmlFor="">Email</label>
                        <input
                            className='login__form__input'
                            type="email"
                            name='email'
                            value={values.email}
                            onChange={handleChange} />

                        <label className='login__form__label' htmlFor="">Password</label>
                        <input
                            className='login__form__input'
                            type="password"
                            name='password'
                            value={values.password}
                            onChange={handleChange} />
                        <p className='login__form__register__info'>Don't have an account? <Link to='/register' className='login__form__register__link'>Click here to register</Link></p>
                        <button className='login__form__button'>Log in</button>
                    </form>
                </section>

            </section>

        </div>
    )
}

export default Login;