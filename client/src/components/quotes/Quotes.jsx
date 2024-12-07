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
    const [currentPage, setCurrentPage] = useState(1);
    const [quotesToRender, setQuotesToRender] = useState([]);

    const [hasPageChanged, setHasPageChanged] = useState(false);

    const handlePageNumberClick = (e) => {
        const curPageNumber = e.target.innerText;
        setCurrentPage((prevCurPage) => e.target.innerText);
        const curQuotes = paginate(curPageNumber, quotes);
        setQuotesToRender((prevQuotes) => curQuotes);
        setHasPageChanged((prevPageChange) => !prevPageChange);
    }

    const searchHandler = (searchResult) => {
        //receive search results from child and update quotesToRender
        
        // this fixes a bug when searchResult is undefined - it is not the best fix - need to debug it
        if (!searchResult) {
            setQuotesToRender(quotes.slice(0, 10))
            return;
        }
            
        setQuotesToRender((prevQuotes) => searchResult);
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

            //set initial default values
            setQuotesToRender(allQuotes.slice(0, 10));
        })()
    }, [])

    return (

        <div className='quotes__container'>
            <h1 className='quotes__container__heading'><span className='quotes__container__heading__effect'>Our</span> Quotes</h1>

            <h2 className='quotes__container__subheading'>BookHub's collection of words worth remembering. Add your favorite quotes and let readers discover new gems.</h2>

            <Search
                searchHandler={searchHandler}
            />

            <div
                className={`quotes__container__card__container ${hasPageChanged ? 'quotes__container__card__container__pageChanged' : 'quotes__container__card__container__pageChanged__again'}`}>
                {quotes.length > 0
                    ?
                    <section className='quotes__container__quote__card'>
                        {quotesToRender.length > 0 && quotesToRender.map((q, index) => (
                            <QuotesCard
                                q={q}
                                index={index}
                                key={q._id} />
                        ))}
                    </section>
                    :
                    <Loader />
                }

            </div>
            <Pagination
                currentPage={currentPage}
                pagesCount={pagesCount}
                handlePageNumberClick={handlePageNumberClick}
            />
        </div>
    )
}

export default Quotes;