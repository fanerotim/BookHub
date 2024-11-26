import styles from './Search.module.scss'

const Search = () => {

    const handleSearch = (e) => {
        console.log(e.target.value)
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