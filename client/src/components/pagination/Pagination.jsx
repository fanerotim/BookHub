import { useState, useEffect } from 'react';
import styles from './Pagination.module.scss'

const Pagination = ({
    pagesCount,
    handlePageNumberClick,
    currentPage }) => {

    //initially set the pageNumbers to numbers without the first and last as those will be page 1 and last page
    const [pageNumbers, setPageNumbers] = useState(pagesCount.slice(1, pagesCount.length - 1));
    const lastPage = pagesCount[pagesCount.length - 1];
    const secondToLastPage = pagesCount[pagesCount.length - 2];
    const firstPage = pagesCount[pagesCount[0]];

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    const nextPageHandler = () => {

        if (currentPage + 1 <= pagesCount.length) {
            handlePageNumberClick(currentPage + 1);
        }

        if (currentPage + 1 == 2) {
            return;
        }

        if (currentPage == secondToLastPage || currentPage == lastPage) {
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

        //re-set when last page is reached
        if (currentPage == lastPage) {
            return;
        }

        if (currentPage == firstPage || currentPage == 2 || currentPage == 1) {
            return
        }

        const newPageNumbers = pageNumbers;
        const lastPageNumber = newPageNumbers.pop();
        newPageNumbers.unshift(lastPageNumber);
        setPageNumbers((prevPagenums) => newPageNumbers);
    }

    return (
        <article className={styles.paginationWrapper}>
            {/* <ul
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
                                    ? <li
                                        key={i}
                                    >...
                                    </li>
                                    : index === 4
                                        ? <li
                                            className={`${styles.paginationList__item} ${currentPage == 5 ? `${styles.paginationList__currentPage}` : ''}`}
                                            onClick={() => handlePageNumberClick(i)}
                                            key={i}
                                        >{lastPage}
                                        </li>
                                        : '')
                }
            </ul> */}

            <div className={styles.paginationBtnContainer}>
                <button
                    className={styles.paginationBtnContainer__btn}
                    onClick={prevPageHandler}>
                    Prev
                </button>

                <p className={styles.paginationBtnContainer__pageInfo}>
                    {/* page */}
                    <span className={styles.paginationBtnContainer__pageInfo__pageNum}>{currentPage}</span>
                    of
                    <span className={styles.paginationBtnContainer__pageInfo__pageNum}>{pagesCount.length}</span>
                </p>

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