import styles from './Pagination.module.scss'

const Pagination = ({pagesCount}) => {
    console.log(pagesCount);
    
    return (
        <ul
            className={styles.paginationContainer}>
            {
                pagesCount.length > 0
                    ?
                    <li>{pagesCount.join(', ')}</li>
                    : ''
                }
        </ul>
    )
}

export default Pagination;