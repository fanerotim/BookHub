import './Register.scss'
import useForm from '../../hooks/useForm';
import { useSignup } from '../../hooks/useSignup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loader from '../loader/Loader'

const initialValues = {
    username: '',
    email: '',
    password: '',
    rePassword: ''
}

const Register = () => {

    const { signup } = useSignup();
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const [registering, setRegistering] = useState(false)

    const { values, handleChange } = useForm(initialValues)

    async function submitHandler(e) {
        e.preventDefault();

        // form input validation
        if (values.username == '') {
            return setError((oldError) => 'Username must be provided')
        } else if (values.email == '') {
            return setError((oldError) => 'Email must be provided')
        } else if (values.password == '') {
            return setError((oldError) => 'Password must be provided')
        } else if (values.password !== values.rePassword) {
            return setError((oldPassword) => 'Password mismatch')
        }

        try {
            setRegistering(() => true)
            const signUpReq = await signup(values);
            // redirect on success
            navigate('/')
        } catch (err) {
            setError((oldError) => err.message)
        }
    }

    return (
        <section className='register__container'>
            <div className='register__content__wrapper'>

                <div className='register__content__wrapper__text'>
                    <h1 className='register__content__wrapper__text__main'>Join the <span className='register__content__wrapper__text__main__logo'>BookHub</span> Community</h1>
                    <h2 className='register__content__wrapper__text__description'>Be part of a community that celebrates stories and knowledge. Sign up now to start exploring a vast collection of books.</h2>
                </div>



                <div className='register__form__wrapper'>
                    <h1 className='register__form__heading'>Sign up</h1>

                    {registering
                        ? <div className='loader'>
                        </div>
                        : <form className='register__form' onSubmit={submitHandler}>
                            <label className='register__form__label'>Username</label>
                            <input
                                className='register__form__input'
                                name='username'
                                value={values.username}
                                onChange={handleChange}
                                type="text" />

                            <label className='register__form__label'>Email</label>
                            <input
                                className='register__form__input'
                                name='email'
                                value={values.email}
                                onChange={handleChange}
                                type="email" />

                            <label className='register__form__label' >Password</label>
                            <input
                                className='register__form__input'
                                name='password'
                                value={values.password}
                                onChange={handleChange}
                                type="password" />

                            <label className='register__form__label'>Confirm Password</label>
                            <input
                                className='register__form__input'
                                name='rePassword'
                                value={values.rePassword}
                                onChange={handleChange}
                                type="password" />
                            <p className='register__form__login__info'>Already registered?</p>
                            <Link className='register__form__login__link' to='/login'>Please click here to login</Link>
                            <button className='register__form__button'>Submit</button>
                            {error && (<p className='register__form__error__message'>{error}</p>)}
                        </form>}

                </div>
            </div>
        </section>
    )
}

export default Register;