import { useEffect, useState } from 'react';
import './Features.scss'

const Features = () => {

    const [animation, setAnimation] = useState(false);

    // first iteration of thi functionality
    //TODO: review and improve code
    useEffect(() => {
        const triggerAnimation = () => {
            window.addEventListener('scroll', (e) => {

                if (window.scrollY > 556) {
                    setAnimation((oldAnimation) => true)
                }
            })
        }
        triggerAnimation();
        return () => {
            window.removeEventListener('scroll', triggerAnimation);
        }
    }, [])


    return (
        <section className='home__app__info'>

            <h1 className='home__app__info__heading'>Some of our Features</h1>
            <p className='home__app__info__subheading'>Registered users have access to the below functionalities. Don't worry though, you can browse through our library as a guest too</p>

            <div className='home__app__info__features__wrapper' {...animation ? { style: { animationName: 'slideIn', animationDuration: '3s', opacity: 1 } } : ''}>
                <ul className='home__app__info__icons__list'>
                    <div className='home__app__info__item__wrapper'>
                        <span className="material-symbols-outlined home__app__info__icons__list__icon home__app__info__icons__list__icon__like">thumb_up</span>
                        <li className='home__app__info__icons__list__item'>Like a book</li>
                    </div>

                    <div className='home__app__info__item__wrapper'>
                        <span className="material-symbols-outlined home__app__info__icons__list__icon home__app__info__icons__list__icon__dislike">thumb_down</span>
                        <li className='home__app__info__icons__list__item'>Dislike a book</li>
                    </div>

                    <div className='home__app__info__item__wrapper'>
                        <span className="material-symbols-outlined home__app__info__icons__list__icon home__app__info__icons__list__icon__comment">comment</span>
                        <li className='home__app__info__icons__list__item'>Comment/Review a book</li>
                    </div>
                </ul>

                <ul className='home__app__info__icons__list'>

                    <div className='home__app__info__item__wrapper'>
                        <span className="material-symbols-outlined home__app__info__icons__list__icon home__app__info__icons__list__icon__add">add</span>
                        <li className='home__app__info__icons__list__item'>Add a book</li>
                    </div>

                    <div className='home__app__info__item__wrapper'>
                        <span className="material-symbols-outlined home__app__info__icons__list__icon home__app__info__icons__list__icon__edit">edit</span>
                        <li className='home__app__info__icons__list__item'>Edit a book</li>
                    </div>

                    <div className='home__app__info__item__wrapper'>
                        <span className="material-symbols-outlined home__app__info__icons__list__icon home__app__info__icons__list__icon__delete">delete</span>
                        <li className='home__app__info__icons__list__item'>Delete a book with one click</li>
                    </div>
                </ul>

            </div>

        </section>
    )
}

export default Features;