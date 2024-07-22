import { useEffect, useState } from 'react';
import './Testimonials.scss'
import testimonialImg from './testimonial1.jpg';
import testimonialImg1 from './testimonial2.jpg'

const testimonials = [
    {
        text: 'I wanted to say that I am very happy to have found this website',
        name: 'P. Cholakov',
        image: testimonialImg,
    },
    {
        text: 'Yes, this seems to be working fine!',
        name: 'M. Cholakova',
        image: testimonialImg1
    }
]

const Testimonials = () => {

    const [index, setIndex] = useState(0);

    function slideRight(e) {
        setIndex(index => {
            if (index + 1 === testimonials.length) {
                return index = 0;
            } else {
                return index + 1;
            }
        });
    }

    function slideLeft() {
        setIndex(index => {
            if (index <= 0) {
                return index = testimonials.length - 1;
            } else {
                return index - 1;
            }
        })
    }

    useEffect(() => { }, [index])


    return (
        <section className="testimonials">
            <p className='testimonials__heading__small'>Testimonials</p>
            <h1 className='testimonials__heading'>What our users are Saying</h1>

            <section className="testimonials__card" >
                {/* <p className="testimonials__card__text">{testimonials[index].text}</p> */}


                <div className='testimonials__card__user__container'>
                    <div className='testimonials__card__user__container__img__container'>
                        <img className='testimonials__card__user__container__img' src={testimonials[index].image} alt="image" />
                        <p className='testimonials__card__user__container__name'>{testimonials[index].name}</p>
                    </div>

                    <div className='testimonials__card__user__container__text__container'>
                        <p className="testimonials__card__text">{testimonials[index].text}</p>
                    </div>
                    <span className='testimonials__card__user__container__quote__icon'></span>
                </div>
            </section>


            <button onClick={slideLeft} className='testimonials__buttons testimonials__buttons__left'><span className="material-symbols-outlined">arrow_back</span></button>
            <button onClick={slideRight} className='testimonials__buttons testimonials__buttons__right'><span className="material-symbols-outlined">arrow_forward</span></button>

        </section>
    )
}

export default Testimonials;