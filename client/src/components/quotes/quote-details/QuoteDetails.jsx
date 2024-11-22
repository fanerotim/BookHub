import Back from '../../back-btn/Back';
import styles from './QuoteDetails.module.scss'
import { useLocation } from 'react-router-dom';


const QuoteDetails = () => {

    const location = useLocation();
    const { quote, author } = location.state.q;
    const prevPathname  = location.state.location.pathname;

    return (
        <>
            <Back prevPathname={prevPathname}/>
            <div className={styles.quoteWrapper}>
                <h1 className={styles.quoteText}>{quote}</h1>
                <p className={styles.quoteAuthor}>{author}</p>
            </div>
        </>
    )
}

export default QuoteDetails;