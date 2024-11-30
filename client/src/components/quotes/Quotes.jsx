import './Quotes.scss'
import QuotesCard from './quotes-card/QuotesCard';
import Search from '../search/Search';
import { useEffect, useState } from 'react';
import useQuotes from '../../hooks/useQuotes';
import Loader from '../loader/Loader';
import Pagination from '../pagination/Pagination';
import usePaginate from '../../hooks/usePaginate';

const Quotes = () => {

    const { getAllQuotes } = useQuotes();
    const { paginate, getPagesCount } = usePaginate();

    const [quotes, setQuotes] = useState([]);
    const [pagesCount, setPagesCount] = useState([]);
    const [quotesToRender, setQuotesToRender] = useState([]);

    const handlePageNumberClick = (e) => {
        const curPageNumber = e.target.innerText;
        const curQuotes = paginate(curPageNumber, quotes);
        
        setQuotesToRender((prevQuotes) => curQuotes);
    }

    useEffect(() => {
        (async () => {

            //get all quotes
            const allQuotes = await getAllQuotes()
            setQuotes(allQuotes);

            //get number of pages in an array
            const numberOfPages = getPagesCount(allQuotes);
            //set number of pages in state
            setPagesCount((prevPages) => numberOfPages);

            setQuotesToRender(allQuotes.slice(0, 10));
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
                        {quotesToRender.map((q, index) => (
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
            <Pagination
                pagesCount={pagesCount}
                handlePageNumberClick={handlePageNumberClick} />
        </div>
    )
}

export default Quotes;