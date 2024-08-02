import './EditBook.scss';
import useBookDetails from '../../../hooks/useBookDetails';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import useForm from '../../../hooks/useForm';
import useEditBook from '../../../hooks/useEditBook';

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
    const { values, handleChange } = useForm(Object.assign(initialValues, book))

    useEffect(() => {
        (async () => {
            const bookDetails = await getDetails(bookId);
            setBook((oldBook) => bookDetails);
        })()
    }, [])


    const { update } = useEditBook();

    function handleSubmit(e) {
        e.preventDefault();
        update(values);
    }

    return (
        <section className='edit__page__container'>
            <div className='edit__page__form__text'>
                <h1>Edit your book</h1>
            </div>

            <div className='edit__page__form__container'>
                <form className='edit__page__form' onSubmit={handleSubmit}>
                    <div className='edit__page__form__fields'>

                        <div className='edit__page__form__fields__title__author__container'>
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
                                            <option key={genre} defaultValue={values.genre}>{values.genre}</option>
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
                        <button>Save</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default EditBook;