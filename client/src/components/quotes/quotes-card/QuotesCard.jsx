import styles from './QuotesCard.module.scss';

const QuotesCard = ({q, index}) => {

    return (
        <section className={`${styles.quotes__container} ${index % 2 === 0 ? styles.cardA : styles.cardB}`}>
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