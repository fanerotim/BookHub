import './Testimonials.scss'
import testimonialImg from './testimonial1.jpg';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h1 className='testimonials__heading'>What our users are Saying</h1>

            <section className="testimonials__card">
                <p className="testimonials__card__text">Since I found BookHub I have not been looking around for any other place for book suggestions. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, veritatis!</p>
                
                <div className='testimonials__card__user__container'>
                    <img className='testimonials__card__user__container__img' src={testimonialImg} alt="image" />
                    <p className='testimonials__card__user__container__name'>P. Cholakov</p>
                    <span className='testimonials__card__user__container__quote__icon'></span>
                </div>
            </section>
        </section>
    ) 
}

export default Testimonials;