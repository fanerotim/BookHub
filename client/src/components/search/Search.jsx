import { useEffect, useState } from 'react'
import styles from './Search.module.scss'
import useSearch from '../../hooks/useSearch';

const Search = ({ searchHandler }) => {

    const { search } = useSearch();
    const [searchString, setSearchString] = useState('');

    const handleSearch = (e) => {

        const currentSearchQuery = e.target.value;
        setSearchString((prevString) => currentSearchQuery);

        searchHandler(currentSearchQuery)
    }



    useEffect(() => {
        search(searchString)
    }, [searchString])

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