import { useState } from 'react';
import styles from './Pagination.module.scss'

const Pagination = ({
    pagesCount,
    handlePageNumberClick,
    currentPage }) => {

    const [pageNumbers, setPageNumbers] = useState(pagesCount);

    const nextPageHandler = () => {
        if (currentPage + 1 <= pagesCount.length) {
            handlePageNumberClick(currentPage + 1);
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

        const newPageNumbers = pageNumbers;
        const lastPageNumber = newPageNumbers.pop();
        newPageNumbers.push(lastPageNumber);
        setPageNumbers(newPageNumbers);
    }

    console.log(pagesCount)

    return (
        <article className={styles.paginationWrapper}>
            <ul
                className={styles.paginationList}>
                {
                    pagesCount.map((i, index) =>
                        index === 0
                            ?
                            <li
                                className={`${styles.paginationList__item} ${currentPage == i ? `${styles.paginationList__currentPage}` : ''}`}
                                onClick={() => handlePageNumberClick(i)}
                                key={i}>
                                {1}
                            </li>
                            : index === 1
                                ? <li
                                    className={`${styles.paginationList__item} ${currentPage == i ? `${styles.paginationList__currentPage}` : ''}`}
                                >{pageNumbers[index]}</li>
                                : index === 2
                                    ? <li>...</li>
                                    : index === 4
                                        ? <li
                                            className={`${styles.paginationList__item} ${currentPage == i ? `${styles.paginationList__currentPage}` : ''}`}
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