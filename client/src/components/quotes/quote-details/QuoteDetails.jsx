import styles from './QuoteDetails.module.scss'
import { useParams } from 'react-router-dom';

const QuoteDetails = () => {

    const {quoteId} = useParams();
    console.log(quoteId);

    return (
        <div>
            <h1 className={styles.headingColor}>Id is {quoteId}</h1>
        </div>
    )
}

export default QuoteDetails;