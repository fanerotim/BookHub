import { useState } from 'react';
import styles from './Pagination.module.scss'

const Pagination = ({
    pagesCount,
    handlePageNumberClick,
    currentPage }) => {

    //initially set the pageNumbers to numbers without the first and last as those will be page 1 and last page
    const [pageNumbers, setPageNumbers] = useState(pagesCount.slice(1, pagesCount.length - 1));
    console.log('page nums are:', pageNumbers);

    const nextPageHandler = () => {

        if (currentPage + 1 <= pagesCount.length) {
            handlePageNumberClick(currentPage + 1);
        }

        if (currentPage + 1 == 2) {
            return;
        }

        if (currentPage == 4) {
            return;
        }
        
        const newPageNumbers = pageNumbers;
        const firstPageNumber = newPageNumbers.shift();
        newPageNumbers.push(firstPageNumber);
        setPageNumbers((prevPageNums) => newPageNumbers);
    }

    const prevPageHandler = () => {
        
        if (currentPage - 1 > 0) {
            handlePageNumberClick(currentPage - 1);
        }

        if (currentPage == 5) {
            return;
        }

        if (currentPage == 1 || currentPage == 2) {
            return
        }
        
        const newPageNumbers = pageNumbers;
        const lastPageNumber = newPageNumbers.pop();
        newPageNumbers.unshift(lastPageNumber);
        setPageNumbers((prevPagenums) => newPageNumbers);
    }

    return (
        <article className={styles.paginationWrapper}>
            <ul
                className={styles.paginationList}>
                {
                    pagesCount.map((i, index) =>
                        index === 0
                            ?
                            <li
                                className={`${styles.paginationList__item} ${currentPage == 1 ? `${styles.paginationList__currentPage}` : ''}`}
                                onClick={() => handlePageNumberClick(i)}
                                key={i}>
                                {1}
                            </li>
                            : index === 1
                                ? <li
                                    onClick={() => handlePageNumberClick(i)}
                                    className={`${styles.paginationList__item} ${currentPage !== 1 && currentPage !== 5 ? `${styles.paginationList__currentPage}` : ''}`}
                                    key={i}
                                >{pageNumbers[0]}</li>
                                : index === 2
                                    ? <li>...</li>
                                    : index === 4
                                        ? <li
                                            className={`${styles.paginationList__item} ${currentPage == 5 ? `${styles.paginationList__currentPage}` : ''}`}
                                            onClick={() => handlePageNumberClick(i)}
                                            key={i}
                                        >{5}
                                        </li>
                                        : '')
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