import './Register.scss'
import useForm from '../../hooks/useForm';

const Register = () => {

    const { values, handleChange } = useForm({
        username: '',
        email: '',
        password: '',
        rePassword: ''
    })

    function submitHandler(e) {
        e.preventDefault();
        console.log(values);
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
                    <form className='register__form' onSubmit={submitHandler}>
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
                        <button className='register__form__button'>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Register;