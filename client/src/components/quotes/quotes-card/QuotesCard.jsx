import styles from './QuotesCard.module.scss';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const QuotesCard = ({ q, index }) => {

    const location = useLocation();


    return (
        <section
            className={
            `${styles.quotes__container} 
            ${index % 2 === 0 ? styles.cardA : styles.cardB}`}>
                
            <h1 className={styles.quotes__container__quote}>
                {q.quote}
            </h1>

            <h2 className={styles.quotes__container__author}>
                {q.author}
            </h2>

            <Link 
            className={`${styles.linkStyleReset}`}
            state={{ q, location }}
            to={`/quotes/${q._id}`}>
                More
            </Link>
        </section>
    )
}

export default QuotesCard;