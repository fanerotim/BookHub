import styles from './QuotesCard.module.scss';

const QuotesCard = ({q}) => {
   
    return (
        <section className={styles.quotes__container}>
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