import './Home.scss';
import Testimonials from './testimonials/Testimonials';
import Features from './features/Features';
import { useEffect, useState } from 'react';

const Home = () => {

    const [animation, setAnimation] = useState(false);

    useEffect((e) => {
        function triggerAnimation() {
            document.addEventListener('scroll', (e) => {
                
                if (window.scrollY >= 444) {
                    setAnimation((oldAnimation) => true)
                }
            })
        }
        triggerAnimation()
    }, [])

    return (
        <main className='home__container'>
            <section className='home__text'>
                <h1 className='home__text__main-heading'>Welcome to <span className='home__text__main-heading__logo'>BookHub:</span> <span className='home__text__main-heading__description'>Your Ultimate Book Companion</span></h1>

                <div className='home__text__subheading__wrapper'>
                    <h2 className='home__text__subheading__main'>Discover. Read. Connect.</h2>
                    <h2 className='home__text__subheading'>At BookHub, we believe in the power of stories and the magic of books. Our app is designed to be your go-to platform for everything book-related. Whether you’re an avid reader or just starting your literary journey, BookHub offers a world of endless possibilities.</h2>

                </div>
            </section>

            <section className='home__why__us__container'>

                <div className='home__why__us__text__wrapper'>

                    <h1 className='home__why__us__text__wrapper__heading'>Why choose us<span className='home__why__us__text__wrapper__heading__question__mark' {...animation ? {style: {animationName: 'delayedLoad', animationDuration: '3s', opacity: '1'}} : ''}>?</span></h1>

                    <ul className='home__why__us__list'>
                        <div className='home__why__us__list__item'>
                            <h3 className='home__why__us__list__item__reason'>Vast Collection of Books</h3>
                            <p className='home__why__us__list__item__reason__description'>Join a vibrant community of book lovers. Share your thoughts, read reviews, and engage in discussions with fellow readers. BookHub makes it easy to find your next great read through the experiences of others.</p>
                        </div>

                        <div className='home__why__us__list__item'>
                            <h3 className='home__why__us__list__item__reason'>Community and Reviews</h3>
                            <p className='home__why__us__list__item__reason__description'>Join a vibrant community of book lovers. Share your thoughts, read reviews, and engage in discussions with fellow readers. BookHub makes it easy to find your next great read through the experiences of others.</p>
                        </div>

                        <div className='home__why__us__list__item'>
                            <h3 className='home__why__us__list__item__reason'>Stay Updated</h3>
                            <p className='home__why__us__list__item__reason__description'>Receive notifications about new releases, upcoming book events, and exclusive deals. Stay in the loop with the latest happenings in the literary world.</p>
                        </div>
                    </ul>

                </div>

            </section>

            <Features />
            <Testimonials />
        </main>
    )
}

export default Home;