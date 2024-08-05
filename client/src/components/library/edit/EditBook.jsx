import './EditBook.scss';
import useBookDetails from '../../../hooks/useBookDetails';
import { useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react';
import useForm from '../../../hooks/useForm';
import useEditBook from '../../../hooks/useEditBook';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const initialValues = {
    title: '',
    author: '',
    description: '',
    genre: '',
    imgUrl: ''
}

const genres = ['Fiction', 'Biography', 'Science-Fiction', 'Psychology']

const EditBook = () => {
    const { bookId } = useParams();
    const { getDetails } = useBookDetails();
    const [book, setBook] = useState({});
    const formValues = useMemo(() => Object.assign({}, initialValues, book), [book])
    const { values, handleChange } = useForm(formValues)

    useEffect(() => {
        (async () => {
            const bookDetails = await getDetails(bookId);
            setBook((oldBook) => bookDetails);
        })()
    }, [])


    const { update } = useEditBook();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (values.title == '') {
            return setError((oldError) => 'Title must be provided')
        } else if (values.author == '') {
            return setError((oldError) => 'Author must be provided')
        } else if (values.description == '') {
            return setError((oldError) => 'Description must be provided')
        } else if(values.description.length > 600) {
            return setError((oldError) => 'Description must be less than 600 characters')
        } else if (values.imgUrl == '') {
            return setError((oldError) => 'Image Url must be provided')
        } 

        try {
            const updateBookRequest = await update(values);
            navigate(`/library/${bookId}`)
        } catch(err) {
            setError((oldError) => err.message)
        }
    }

    return (
        <section className='edit__page__container'>
            <div className='edit__page__form__text'>
                <div className='edit__page__form__text__back__btn__container'>
                    <Link to='/library' className='edit__page__form__text__back__btn'> <span className="material-symbols-outlined edit__page__form__text__back__arrow">keyboard_backspace</span>Back to Library</Link>
                </div>

                <h1 className='edit__page__form__text__heading'>Edit Book Entry</h1>
                <p className='edit__page__form__text__description'>Welcome to the <span className='edit__page__form__text__description__logo'>BookHub</span> Edit Page. Use the form on the right to modify your book entry. Please double-check the information before saving your changes.</p>

            </div>

            <div className='edit__page__form__container'>
                <form className='edit__page__form' onSubmit={handleSubmit}>
                    <div className='edit__page__form__fields'>

                        <div className='edit__page__form__fields__two'>
                            <div>
                                <label
                                    htmlFor=""
                                    className='edit__page__form__fields__label'
                                >Title
                                </label>
                                <input
                                    type="text"
                                    name='title'
                                    className='edit__page__form__fields__input'
                                    value={values.title}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor=""
                                    className='edit__page__form__fields__label'
                                >Author
                                </label>
                                <input
                                    type="text"
                                    name='author'
                                    value={values.author}
                                    onChange={handleChange}
                                    className='edit__page__form__fields__input'
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor=""
                                className='edit__page__form__fields__label'
                            >Description
                            </label>
                            <textarea
                                name='description'
                                id=""
                                className='edit__page__form__fields__textarea'
                                value={values.description}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className='edit__page__form__fields__two'>
                            <div>
                                <label
                                    className='edit__page__form__fields__label'
                                    htmlFor=""
                                >Genre
                                </label>
                                <select
                                    name='genre'
                                    id=""
                                    className='edit__page__form__fields__select'
                                    onChange={handleChange}
                                >
                                    {genres.map((genre) => (
                                        genre === values.genre
                                            ? (
                                                <option key={genre} selected={values.genre}>{values.genre}</option>
                                            )
                                            : (
                                                <option key={genre} value={genre}>{genre}</option>
                                            )
                                    ))}

                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor=""
                                    className='edit__page__form__fields__label'
                                >Image Url</label>
                                <input
                                    type="text"
                                    className='edit__page__form__fields__input'
                                    name='imgUrl'
                                    onChange={handleChange}
                                    value={values.imgUrl}
                                />
                            </div>
                        </div>

                        {error && <p className='edit__page__form__fields__error_message'>{error}</p>}
                        <button className='edit__page__form__fields__save__btn'>Save</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default EditBook;