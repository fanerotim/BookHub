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

    const [reset, setReset] = useState(false);

    const handlePageNumberClick = (e) => {
        const curPageNumber = e.target.innerText;
        setCurrentPage((prevCurPage) => e.target.innerText);
        const curQuotes = paginate(curPageNumber, quotes);
        setQuotesToRender((prevQuotes) => curQuotes);
        setHasPageChanged((prevPageChange) => !prevPageChange);
    }

    // receive search results from child and update quotesToRender
    const searchHandler = (searchResult) => {

        // each new search starts from page 1
        const pageToStartFrom = 1;
        setCurrentPage((prevCurPage) => pageToStartFrom)
        // if no search query - reset to default
        if (!searchResult) {
            return setReset((prevReset) => !prevReset);    
        }

        // check how many pages need to be rendered based on search result number
        const currentPagesCount = getPagesCount(searchResult);
        setPagesCount((oldPagesCount) => currentPagesCount);

        // each new search result will start from page 1 - that's why it's hardcoded
        const itemsToRender = paginate(pageToStartFrom, searchResult);

        // set the search result as quotes to be rendered
        setQuotesToRender((prevQuotes) => itemsToRender);
        // set search results as quotes that will be rendered when we change pages
        setQuotes((prevQuotes) => searchResult);
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
            setQuotesToRender(allQuotes.slice(0, 5));
        })()
    }, [reset])

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