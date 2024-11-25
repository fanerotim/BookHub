import styles from './AddQuote.module.scss';
import Back from '../back-btn/Back';
import useForm from '../../hooks/useForm';
import useAdd from '../../hooks/useAddQuote';

const initialValues = {
    quote: '',
    author: '',
    title: ''
}

const AddQuote = () => {

    const { values, handleChange } = useForm(initialValues);
    const { add } = useAdd();

    const handleSubmit = (e) => {
        e.preventDefault();

        add(values)
    }

    return (
        <section className={styles.addQuoteWrapper}>
            <Back />
            <form
                className={styles.addQuoteForm}
                onSubmit={(e) => handleSubmit(e)}>
                <h1
                    className={styles.addQuoteForm__heading}>
                    Add
                    <span
                        className={styles.addQuoteForm__heading__modifier}>
                        a quote
                    </span>
                </h1>
                <div>
                    <label
                        className={styles.addQuoteForm__label}
                        htmlFor="">
                        Quote text
                    </label>
                    <textarea
                        onChange={handleChange}
                        className={styles.addQuoteForm__textArea}
                        name="quote"
                        id="">
                    </textarea>
                </div>
                <div
                    className={styles.addQuoteForm__inputWrapper}>
                    <label
                        className={styles.addQuoteForm__label}
                        htmlFor="">
                        Author
                    </label>
                    <input
                        onChange={handleChange}
                        className={styles.addQuoteForm__input}
                        name="author"
                        type="text" />
                </div>
                <div
                    className={styles.addQuoteForm__inputWrapper}>
                    <label
                        className={styles.addQuoteForm__label}
                        htmlFor="">
                        Book title
                    </label>
                    <input
                        onChange={handleChange}
                        className={styles.addQuoteForm__input}
                        name="title"
                        type="text" />
                </div>
                <button
                    className={styles.addQuoteForm__btn__submit}>
                    Add
                </button>
            </form>
        </section>
    )
}

export default AddQuote;