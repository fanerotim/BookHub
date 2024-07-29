import './Library.scss';
import LibraryCard from './library-card/LibraryCard';

const Library = () => {
    return (
        <section className='library__container'>
            <div className='library__text__container'>
                <h1 className='library__text__container__heading'>Welcome to <span className='library__text__container__logo'>BookHub's</span> Catalog</h1>
                <p className='library__text__container__subheading__main'>Dive into the vast universe of books with BookHub!</p>
                <p className='library__text__container__subheading'>Our catalog is designed to be your ultimate destination for discovering, sharing, and discussing books of all kinds.</p>
            </div>

            <div className='library__card__container'>
                <LibraryCard/>
            </div>
        </section>

    )
}

export default Library;