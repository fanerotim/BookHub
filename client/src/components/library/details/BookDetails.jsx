import { useParams } from "react-router-dom";
import useBookDetails from "../../../hooks/useBookDetails";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './BookDetails.scss'
import DeleteBookModal from "../delete-modal/DeleteBookModal";
import { useAuthContext } from "../../../hooks/useAuthContext";
import useLikeBook from "../../../hooks/useLikeBook";

const BookDetails = () => {

    // get bookId
    const { bookId } = useParams();
    const { getDetails } = useBookDetails();
    const [book, setBook] = useState({});
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    // get logged user's token which incldues their id
    const { auth } = useAuthContext();
    const [isOwner, setIsOnwer] = useState(false);

    // handle like functionality 
    const { like } = useLikeBook()

    useEffect(() => {
        (async () => {

            const book = await getDetails(bookId);
            setBook((oldBook) => book);

            // check if we have logged in user
            if (auth) {
                // check if currently logged user is owner of book
                setIsOnwer((oldOwner) => auth._id === book.owner)
            }

            if (book.description.length > 400) {
                setShowFullDescription(true);
            }
        })()
    }, [auth])

    function descriptionHandler() {
        setShowFullDescription((oldDescription) => !showFullDescription)
    }

    function deleteHandler() {
        setDeleteModal((oldModalState) => !oldModalState)
    }

    async function handleLike() {
        const likedBook = await like();
        setBook((notLikedBook) => likedBook)
        
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

                        <div className="book__details__likes__container">
                            <span className="material-symbols-outlined book__details__likes__container__icon">favorite</span>
                            <p className="book__details__likes__container__count">{book.likes?.length}</p>
                        </div>

                        <span className="book__details__secondary__info__genre">{book.genre}</span>

                        <h1 className="book__details__secondary__info__description__heading">Description</h1>
                        <p className="book__details__secondary__info__description__summary">{showFullDescription ? book.description.substring(0, 400) + '...' : book.description}</p>
                        <button className="book__details__secondary__info__description__button" onClick={descriptionHandler}>{showFullDescription ? 'More' : 'Less'}</button>

                        {auth && <div className="button__container">
                            {isOwner
                                ?
                                (
                                    <>
                                        <Link to={`/library/${book._id}/edit`} className="button__container__button button__container__edit">Edit</Link>
                                        <button onClick={deleteHandler} className="button__container__button button__container__delete">Delete</button>
                                    </>
                                )
                                :
                                (
                                    <button
                                        onClick={handleLike}
                                        disabled={book.likes?.some(id => id == auth._id)} 
                                        className="button__container__button button__container__like" >Like</button>
                                )}
                        </div>}

                    </div>

                    <div className="book__details__secondary__info__img__container">
                        <img className="book__details__secondary__info__image" src={book.imgUrl} alt="book image" />
                    </div>
                </div>

                {deleteModal && <DeleteBookModal props={{ deleteHandler }} />}
            </section>

        </section>

    )
}

export default BookDetails;