import './Register.scss'

const Register = () => {
    return (
        <section className='register__container'>
            <div className='register__content__wrapper'>

                <div className='register__content__wrapper__text'>
                    <h1 className='register__content__wrapper__text__main'>Join the <span className='register__content__wrapper__text__main__logo'>BookHub</span> Community</h1>
                    <h2 className='register__content__wrapper__text__description'>Be part of a community that celebrates stories and knowledge. Sign up now to start exploring a vast collection of books.</h2>
                </div>

                <div className='register__form__wrapper'>
                    <h1 className='register__form__heading'>Sign up</h1>
                    <form className='register__form' action="">
                        <label className='register__form__label' >Name</label>
                        <input className='register__form__input' type="text" />

                        <label className='register__form__label' >Email</label>
                        <input className='register__form__input' type="text" />

                        <label className='register__form__label' >Password</label>
                        <input className='register__form__input' type="text" />

                        <label className='register__form__label'>Confirm Password</label>
                        <input className='register__form__input' type="text" />
                        <button className='register__form__button'>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Register;