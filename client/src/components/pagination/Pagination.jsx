import styles from './Pagination.module.scss'

const Pagination = ({
    pagesCount,
    handlePageNumberClick,
    currentPage }) => {
    
    const nextPageHandler = () => {
        if (currentPage + 1 <= pagesCount.length) {
            handlePageNumberClick(currentPage + 1);
        }
    }

    const prevPageHandler = () => {
        if (currentPage - 1 > 0) {
            handlePageNumberClick(currentPage - 1);
        }
    }

    return (
        <article className={styles.paginationWrapper}>
            <ul
                className={styles.paginationList}>
                {
                    pagesCount.map(i => (
                        <li
                            className={`${styles.paginationList__item} ${currentPage == i ? `${styles.paginationList__currentPage}` : ''}`}
                            onClick={() => handlePageNumberClick(i)}
                            key={i}>
                            {i}
                        </li>
                    ))
                }
            </ul>

            <div className={styles.paginationBtnContainer}>
                <button
                    className={styles.paginationBtnContainer__btn} 
                    onClick={prevPageHandler}>
                        Prev
                </button>
                <button 
                    className={styles.paginationBtnContainer__btn}
                    onClick={nextPageHandler}>
                        Next
                </button>
            </div>

        </article>
    )
}

export default Pagination;