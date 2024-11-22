import styles from './QuotesCard.module.scss';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const QuotesCard = ({ q, index }) => {

    const location = useLocation();

    return (
        <section className={
            `${styles.quotes__container} 
            ${index % 2 === 0 ? styles.cardA : styles.cardB} 
            ${index === 0 ? `${styles.first__card__animation}` : ''}`}>
            <Link 
            state={{q, location}} 
            className={styles.linkStyleReset} 
            to={`/quotes/${q._id}`}>
                <h1 className={styles.quotes__container__quote}>
                    {q.quote}
                </h1>

                <h2 className={styles.quotes__container__author}>
                    {q.author}
                </h2>
            </Link>
        </section>
    )
}

export default QuotesCard;