import styles from './error404.module.scss'
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className={styles['error-container']}>
            <h1 className={styles['heading']}>Oops! <span className={styles['not-found']}>Page Not Found.</span></h1>
            <h2 className={styles.subheading}>We can't seem to find the page you're looking for.</h2>
            <p className={styles.description}>The page you are trying to reach may have been removed, had its name changed, or is temporarily unavailable.</p>
            <Link className={styles['back-btn']} to='/'>Back to Home</Link>
        </div>

    )
}

export default Error404;