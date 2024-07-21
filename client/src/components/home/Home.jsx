import './Home.scss';
import Testimonials from './testimonials/Testimonials';
import Features from './features/Features';

const Home = () => {
    return (
        <main className='home__container'>
            <section className='home__text'>
                <h1 className='home__text__main-heading'>Welcome to BookHub!</h1>
                <h2 className='home__text__subheading'>Our mission is to provide information about books that have the power to change lives. You can scroll through a huge library of books and also have the option to join us</h2>
            </section>

            <section className='home__background__img'>
            </section>

            <Features/>
            <Testimonials/>
        </main>
    )
}

export default Home;