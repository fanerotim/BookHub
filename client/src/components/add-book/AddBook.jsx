import useAddBook from '../../hooks/useAddBook';
import useForm from '../../hooks/useForm';
import './AddBook.scss'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const initialValues = {
    title: '',
    author: '',
    description: '',
    genre: '',
    imgUrl: ''
}

const AddBook = () => {

    const { values, handleChange } = useForm(initialValues)
    const { add } = useAddBook();
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        // form input validation
        if (values.title == '') {
            return setError((oldError) => 'Title must be provided')
        } else if (values.author == '') {
            return setError((oldError) => 'Author must be provided')
        } else if (values.description == '') {
            return setError((oldError) => 'Description must be provided')
        } else if (values.description.length > 600) {
            return setError((oldError) => 'Description must be less than 600 characters long')
        } else if (values.genre == '') {
            return setError((oldError) => 'Genre must be provided')
        } else if (values.imgUrl == '') {
            return setError((oldError) => 'Image Url must be provided')
        }

        try {
            const createRequest = await add(values);
            navigate('/library')
        } catch(err) {
            setError((oldError) => err.message)
        }
    }

    return (
        <section className='add-book__container'>

            <div className='add-book__form__container'>

                <form className='add-book__form' onSubmit={handleSubmit}>
                    <div className='add-book__form__field__wrapper'>
                        <label className='add-book__form__label' htmlFor="">Title</label>
                        <input
                            className='add-book__form__input'
                            type="text"
                            name='title'
                            value={values.title}
                            onChange={handleChange} />
                    </div>

                    <div className='add-book__form__field__wrapper'>
                        <label className='add-book__form__label' htmlFor="">Author</label>
                        <input
                            className='add-book__form__input'
                            type="text"
                            name='author'
                            value={values.author}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='add-book__form__field__wrapper'>
                        <label className='add-book__form__label' htmlFor="">Description</label>
                        <textarea
                            className='add-book__form__textarea'
                            name="description"
                            value={values.description}
                            onChange={handleChange}
                        >
                        </textarea>
                    </div>

                    <div className='add-book__form__field__wrapper'>
                        <label className='add-book__form__label' htmlFor='genre'>Genre</label>
                        <select
                            className='add-book__form__select'
                            name="genre"
                            id='genre'
                            onChange={handleChange}>
                            <option defaultValue={''}></option>
                            <option value='Fiction'>Fiction</option>
                            <option value='Biography'>Biography</option>
                            <option value='Science-Fiction'>Science-Fiction</option>
                            <option value='Psychology'>Psychology</option>
                        </select>
                    </div>

                    <div className='add-book__form__field__wrapper'>
                        <label className='add-book__form__label' htmlFor="">Cover Image Url</label>
                        <input
                            className='add-book__form__input'
                            type="text"
                            name='imgUrl'
                            value={values.imgUrl}
                            onChange={handleChange}
                        />
                    </div>
                    <button className='add-book__form__button'>Add</button>
                    {error && <p className='add-book__form__error__message'>{error}</p>}
                </form>
            </div>

            <div className='add-book__text__container'>
                <div className='add-book__text__wrapper'>
                    <h1 className='add-book__text__wrapper__heading'>Add a Book to <span className='add-book__text__wrapper__logo'>BookHub</span></h1>
                    <h2 className='add-book__text__wrapper__subheading'>Help Us Grow Our Library!</h2>
                    <p className='add-book__text__wrapper__description'>We’re excited to have you contribute to BookHub’s ever-expanding collection of books. Whether it’s a timeless classic, a hidden gem, or the latest bestseller, we’d love to hear about it. </p>
                </div>
            </div>

        </section>
    )
}

export default AddBook;