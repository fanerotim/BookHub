import styles from './Search.module.scss'
import useSearch from '../../hooks/useSearch';

const Search = ({ searchHandler }) => {

    const { search } = useSearch();

    const handleSearch = async (e) => {

        const currentSearchQuery = e.target.value;

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
                placeholder='Search by author or title'
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