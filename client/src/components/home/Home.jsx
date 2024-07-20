import './Home.scss';

const Home = () => {
    return (
        <main className='home__container'>
            <section className='home__text'>
                    <h1 className='home__text__main-heading'>Welcome to BookHub!</h1>
                    <h2 className='home__text__subheading'>Our mission is to provide information about books that have the power to change lives. You can scroll through a huge library of books and also have the option to join us</h2>
            </section>

            <section className='home__background__img'>
            </section>

            <section className='home__app__info'>

                <div className='home__app__info__wrapper__one'>
                    <h1 className='home__app__info__heading'>Registered users can...</h1>
                    <ul className='home__app__info__icons__list'>
                        <div className='home__app__info__item__wrapper'>
                            <span className="material-symbols-outlined home__app__info__icons__list__icon">thumb_up</span>
                            <li className='home__app__info__icons__list__item'>Like a book</li>
                        </div>

                        <div className='home__app__info__item__wrapper'>
                            <span className="material-symbols-outlined home__app__info__icons__list__icon">thumb_down</span>
                            <li className='home__app__info__icons__list__item'>Dislike a book</li>
                        </div>

                        <div className='home__app__info__item__wrapper'>
                            <span className="material-symbols-outlined home__app__info__icons__list__icon">comment</span>
                            <li className='home__app__info__icons__list__item'>Comment/Review a book</li>
                        </div>
                    </ul>

                </div>

                <div className='home__app__info__wrapper__two'>
                    <h1 className='home__app__info__heading'>Also...</h1>
                    <ul className='home__app__info__icons__list'>

                        <div className='home__app__info__item__wrapper'>
                            <span className="material-symbols-outlined home__app__info__icons__list__icon">add</span>
                            <li className='home__app__info__icons__list__item'>Add a book</li>
                        </div>

                        <div className='home__app__info__item__wrapper'>
                            <span className="material-symbols-outlined home__app__info__icons__list__icon">edit</span>
                            <li className='home__app__info__icons__list__item'>Edit their own books</li>
                        </div>

                        <div className='home__app__info__item__wrapper'>
                            <span className="material-symbols-outlined home__app__info__icons__list__icon">delete</span>
                            <li className='home__app__info__icons__list__item'>Delete any of their books with one click</li>
                        </div>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Home;