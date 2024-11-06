import useForm from '../../hooks/useForm'
import './Login.scss'
import { Link, useNavigate } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'
import { useState } from 'react'
import Loader from '../loader/Loader';

const initialValues = {
    email: '',
    password: ''
}

const Login = () => {
    const login = useLogin();
    const navigate = useNavigate();

    const { values, handleChange } = useForm(initialValues)
    const [error, setError] = useState(null);
    const [logging, setLogging] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLogging(true)
        // form input validation
        if (values.email == '') {
            return setError(() => 'Email must be provided')
        } else if (values.password == '') {
            return setError(() => 'Password must be provided')
        }

        // make a request to the API
        try {
            const loginReq = await login(values)
            setLogging(false)
            // redirect on success
            navigate('/')
        } catch (err) {
            // on fail set error message just so it can be displayed
            setLogging(false)
            setError((oldError) => err.message)
        }
    }

    return (

        <div className='login__container'>

            <section className='login__wrapper'>

                <div className='login__wrapper__info__container'>
                    <h1 className='login__wrapper__info__container__main__text'>Get full access to all functionalities on our website</h1>
                </div>


                <section className='login__form__container'>

                    <h1 className='login__form__heading'>Log in</h1>

                    {logging
                        ? <div className='loader__container'>
                            <Loader />
                        </div>
                        :
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
                            {error && <p className='login__form__error__message'>{error}</p>}
                        </form>
                    }

                </section>

            </section>

        </div>
    )
}

export default Login;