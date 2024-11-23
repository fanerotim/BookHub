import styles from './AddQuote.module.scss';
import Back from '../back-btn/Back';
const AddQuote = () => {


    const handleSubmit = () => {

    }

    return (
        <section className={styles.addQuoteWrapper}>
            {/* <h1 className={styles.addQuoteHeading}>Share a Memorable Quote</h1> */}
            {/* <h2 className={styles.addQuoteSubheading}>Have a line from a book that moved you, made you laugh, or stuck with you? Add it here and let the BookHub community discover the magic of words through your eyes.</h2> */}
            <Back/>
            <form
                className={styles.addQuoteForm}
                onSubmit={handleSubmit}>
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
                        className={styles.addQuoteForm__textArea}
                        name=""
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
                        className={styles.addQuoteForm__input}
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
                        className={styles.addQuoteForm__input}
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