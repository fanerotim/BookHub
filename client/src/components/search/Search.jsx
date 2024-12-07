import styles from './Search.module.scss'
import useSearch from '../../hooks/useSearch';

const Search = ({ searchHandler }) => {

    const { search } = useSearch();

    const handleSearch = async (e) => {

        const currentSearchQuery = e.target.value;

        // if search query is empty string - do not make a call to db 
        //TODO: (not the best solution - needs refactoring)
        if (currentSearchQuery === '') {
            return searchHandler(undefined);
        }
        
        //get results from this search
        const searchResult = await search(`/quotes/search/${currentSearchQuery}`);

        //return the results of the search to Parent by passing res to searchHandler
        searchHandler(searchResult)
    }

    return (
        <form className={styles.searchInputWrapper}>

            <input
                className={styles.searchInput}
                onChange={(e) => handleSearch(e)}
                placeholder='Search by author name'
            />

            <span
                className={
                    `${'material-symbols-outlined'}
                ${styles.searchInput__icon}`}>
                search
            </span>

        </form>
    )
}

export default Search;