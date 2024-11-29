import styles from './Pagination.module.scss'

const Pagination = ({ pagesCount, paginate }) => {

    const handleClick = (e) => {
        const curPage = e.target.innerText;
        paginate(curPage);
    }

    return (
        <ul
            className={styles.paginationContainer}>
            {
                pagesCount.map(i => (
                    <li 
                        className={styles.paginationContainer__pageNumber}
                        onClick={(e) => handleClick(e)}
                        key={i}>
                        {i}
                    </li>
                ))
            }
        </ul>
    )
}

export default Pagination;