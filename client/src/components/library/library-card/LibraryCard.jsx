import './LibraryCard.scss'
import { Link } from 'react-router-dom';

const LibraryCard = ({book}) => {
    return (
        <section className='library__card__wrapper'>
            <Link className='link' to={`/library/${book._id}`}>
                <div className='library__card__img__container'>
                    <img className='library__card__img' src={book.imgUrl} alt="book image" />
                </div>

                <div className='library__card__text'>
                    <p className='library__card__text__title'><span className='library__card__text__title__tag'>Title:</span>{book.title}</p>
                    <p className='library__card__text__author'><span className='library__card__text__author__tag'>Author:</span>{book.author}</p>
                </div>
            </Link>
        </section>
    )
}

export default LibraryCard;