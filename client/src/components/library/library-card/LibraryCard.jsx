import './LibraryCard.scss'
import { Link } from 'react-router-dom';

const LibraryCard = ({book}) => {
    return (
        <section className='library__card__wrapper'>
            <Link className='link' to='/'>
                <div className='library__card__img__container'>
                    <img className='library__card__img' src={book.imgUrl} alt="" />
                </div>

                <div className='library__card__text'>
                    <p className='library__card__text__title'>{book.title}</p>
                    <p className='library__card__text__author'>{book.author}</p>
                </div>
            </Link>
        </section>
    )
}

export default LibraryCard;