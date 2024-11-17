import styles from './QuotesCard.module.scss';

const QuotesCard = ({ q, index }) => {

    return (
        <section className={
            `${styles.quotes__container} 
            ${index % 2 === 0 ? styles.cardA : styles.cardB} 
            ${index === 0 ? `${styles.first__card__animation}` : ''}`}>
            <h1 className={styles.quotes__container__quote}>
                {q.quote}
            </h1>

            <h2 className={styles.quotes__container__author}>
                {q.author}
            </h2>
        </section>
    )
}

export default QuotesCard;