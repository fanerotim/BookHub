import Back from '../../back-btn/Back';
import styles from './QuoteDetails.module.scss'
import { useLocation, useParams } from 'react-router-dom';
import FaceBookShareButton from '../social-media-buttons/FacebookButton'
import { Helmet } from 'react-helmet'
import { useEffect, useState } from 'react';
import useQuoteDetails from '../../../hooks/useQuoteDetails';


const QuoteDetails = () => {
    
    const { quoteId } = useParams();
    const [quoteData, setQuoteData] = useState({});
    const { quote, author, title } = quoteData;

    // const location = useLocation();
    // const prevPathname = location.state.location.pathname;
    
    const { getDetails } = useQuoteDetails();

    useEffect(() => {
        (async () => {
            const quoteDetails = await getDetails(quoteId);
            setQuoteData(quoteDetails);
        })()
    }, [])

    return (
        <>
            {/* <Helmet>
                <meta property="og:image:url" content="/assets/quotes.png" />
                <meta property="og:description"
                      content={quote} />
            </Helmet> */}

            <div className={styles.buttonsWrapper}>
                <Back prevPathname='/quotes' />
                <FaceBookShareButton
                    quote={quote}
                    hashtag='#bookhub'
                />
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