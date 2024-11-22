import styles from './QuotesCard.module.scss';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const QuotesCard = ({ q, index }) => {

    const shareUrl = 'https://book-hub.fanerotim.com/library';
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

                    <FacebookShareButton url={shareUrl}>
                        <FacebookIcon
                            size={25}
                            round={true} />
                    </FacebookShareButton>
                </h2>
            </Link>
        </section>
    )
}

export default QuotesCard;