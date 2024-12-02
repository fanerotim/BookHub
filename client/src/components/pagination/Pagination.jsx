import styles from './Pagination.module.scss'

const Pagination = ({ pagesCount, handlePageNumberClick }) => {
    
    return (
        <ul
            className={styles.paginationContainer}>
            {
                pagesCount.map(i => (
                    <li 
                        className={styles.paginationContainer__pageNumber}
                        onClick={(e) => handlePageNumberClick(e)}
                        key={i}>
                        {i}
                    </li>
                ))
            }
        </ul>
    )
}

export default Pagination;