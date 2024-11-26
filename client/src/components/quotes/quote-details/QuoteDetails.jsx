import Back from '../../back-btn/Back';
import styles from './QuoteDetails.module.scss'
import { useLocation } from 'react-router-dom';
import FaceBookShareButton from '../social-media-buttons/FacebookButton'

const QuoteDetails = () => {

    const location = useLocation();
    const { quote, author, title } = location.state.q;
    const prevPathname = location.state.location.pathname;

    return (
        <>
            <div className={styles.buttonsWrapper}>
                <Back prevPathname={prevPathname} />
                <FaceBookShareButton />
            </div>
            <div className={styles.quoteWrapper}>
                <h1 
                    className={styles.quoteTitle}>
                    <span className={styles.quoteTitleSpan}>Excerpt from </span> 
                    {title}
                </h1>
                <h1 className={styles.quoteText}>{quote}</h1>
                <p className={styles.quoteAuthor}>{author}</p>
            </div>


        </>
    )
}

export default QuoteDetails;