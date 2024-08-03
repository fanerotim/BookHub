import { useParams } from "react-router-dom";
import useBookDetails from "../../../hooks/useBookDetails";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './BookDetails.scss'

const BookDetails = () => {

    // get bookId
    const { bookId } = useParams();
    const { getDetails } = useBookDetails();
    const [book, setBook] = useState({});
    const [showFullDescription, setShowFullDescription] = useState(false);


    useEffect(() => {
        (async () => {
            const book = await getDetails(bookId);
            setBook((oldBook) => book);

            if (book.description.length > 400) {
                setShowFullDescription(true);
            }
        })()
    }, [])

    function descriptionHandler() {
        setShowFullDescription((oldDescription) => !showFullDescription)
    }

    return (
        <section className="book__details__container">
            <section className="book__details">

                <div className="book__details__main__info">
                    <h1 className="book__details__main__info__title">{book.title}</h1>
                    <span className="book__details__main__info__span">by</span>
                    <h2 className="book__details__main__info__author">{book.author}</h2>
                </div>

                <div className="book__details__secondary__info">
                    <div className="book__details__secondary__info__description">
                    <span className="book__details__secondary__info__genre">{book.genre}</span>
                        <h1 className="book__details__secondary__info__description__heading">Description</h1>
                        <p className="book__details__secondary__info__description__summary">{showFullDescription ? book.description.substring(0, 400) + '...' : book.description}</p>
                        <button className="book__details__secondary__info__description__button" onClick={descriptionHandler}>{showFullDescription ? 'More' : 'Less'}</button>

                        <div className="button__container">
                            <Link to={`/library/${book._id}/edit`} className="button__container__button button__container__edit">Edit</Link>
                            <Link to={`/library/${book._id}/delete`} className="button__container__button button__container__delete">Delete</Link>
                        </div>
                    </div>

                    <div className="book__details__secondary__info__img__container">
                        <img className="book__details__secondary__info__image" src={book.imgUrl} alt="book image" />
                    </div>
                </div>

            </section>
            
        </section>
    )
}

export default BookDetails;