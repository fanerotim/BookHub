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
                        i === 1
                            ?
                            <li
                                className={`${styles.paginationList__item} ${currentPage == i ? `${styles.paginationList__currentPage}` : ''}`}
                                onClick={() => handlePageNumberClick(i)}
                                key={i}>
                                {1}
                            </li>
                            : i === 2
                                ? <li>{pageNumbers[i]}</li>
                                : i === 3 ? <li>...</li>
                                    : i === 5
                                        ? <li
                                            className={`${styles.paginationList__item} ${currentPage == i ? `${styles.paginationList__currentPage}` : ''}`}
                                            onClick={() => handlePageNumberClick(i)}
                                            key={i}
                                        >{pageNumbers[index]}
                                        </li>
                                        : null)
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