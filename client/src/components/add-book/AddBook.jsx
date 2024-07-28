import './AddBook.scss'

const AddBook = () => {
    return (
        <section className='add-book__container'>

            <div className='add-book__form__container'>

                {/* <h1 className='add-book__form__heading'>Add a Book to BookHub</h1> */}
                <form className='add-book__form' action="">
                    <div className='add-book__form__field__wrapper'>
                        <label className='add-book__form__label' htmlFor="">Title</label>
                        <input className='add-book__form__input' type="text" name='title' />
                    </div>

                    <div className='add-book__form__field__wrapper'>
                        <label className='add-book__form__label' htmlFor="">Author</label>
                        <input className='add-book__form__input' type="text" name='author' />
                    </div>

                    <div className='add-book__form__field__wrapper'>
                        <label className='add-book__form__label' htmlFor="">Description</label>
                        <textarea className='add-book__form__textarea' name="description"></textarea>
                    </div>

                    <div className='add-book__form__field__wrapper'>
                        <label className='add-book__form__label' htmlFor="">Cover Image Url</label>
                        <input className='add-book__form__input' type="text" name='imgUrl' />
                    </div>
                    <button className='add-book__form__button'>Add</button>
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