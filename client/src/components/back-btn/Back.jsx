import styles from './Back.module.scss'

import { Link } from 'react-router-dom';

const Back = ({ prevPathname }) => {
    console.log(prevPathname)
    return (
        <>
            <Link
                to={prevPathname}
                className={styles.backWrapper}>
                Back
            </Link>
        </>
    )
}

export default Back;