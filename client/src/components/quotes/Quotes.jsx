import './Quotes.scss'
import QuotesCard from './quotes-card/QuotesCard';
import Search from '../search/Search';
import { useEffect, useState } from 'react';
import useQuotes from '../../hooks/useQuotes';
import Loader from '../loader/Loader';

const Quotes = () => {

    const [quotes, setQuotes] = useState([]);
    const { getAllQuotes } = useQuotes();

    useEffect(() => {
        (async () => {
            const allQuotes = await getAllQuotes()
            setQuotes(allQuotes);
        })()
    }, [])

    return (

        <div className='quotes__container'>
            <h1 className='quotes__container__heading'><span className='quotes__container__heading__effect'>Our</span> Quotes</h1>

            <h2 className='quotes__container__subheading'>BookHub's collection of words worth remembering. Add your favorite quotes and let readers discover new gems.</h2>

            <Search />

            <div className='quotes__container__card__container'>
                {quotes.length > 0
                    ?
                    <section className='quotes__container__quote__card'>
                        {quotes.map((q, index) => (
                            <QuotesCard
                                q={q}
                                index={index}
                                key={index} />
                        ))}
                    </section>
                    :
                    <Loader />
                }

            </div>

        </div>
    )
}

export default Quotes;