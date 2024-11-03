import './Library.scss';
import LibraryCard from './library-card/LibraryCard';
import useLibrary from '../../hooks/useLibrary';
import { useEffect, useState } from 'react';
import Loader from '../loader/Loader';

const Library = () => {

    const [books, setBooks] = useState([]);
    const [genre, setGenre] = useState('ALL');
    // catalog contains all books in the db. it is used to keep all books and help me avoid making more than 1 request to db
    const [catalog, setCatalog] = useState([]);
    const [fetching, setFetching] = useState(true)

    const { getAll } = useLibrary();

    useEffect(() => {
        (async () => {
            // only req to the db to get all books
            const allBooks = await getAll();
            
            // this state changes depending on genre and it is used to render books
            setBooks(oldBooks => allBooks)
            // keep all books in catalog state
            setCatalog(allBooks);
            setFetching(false)
        })()
    }, [])

    async function getBooksHandler(e) {
        const genre = e.target.innerText;
        setGenre((oldGenre) => genre);

        switch (genre) {
            case 'FICTION':
            case 'BIOGRAPHY':
            case 'SCIENCE-FICTION':
            case 'PSYCHOLOGY':

                //filter through the already fetched books and set them as books - avoid making more requests to db than neccessary 
                const curBooks = catalog.filter(book => book.genre.toLowerCase() === genre.toLowerCase())
                setBooks((oldBooks) => curBooks);
                break;

            default:
                setBooks((oldBooks) => catalog);
                break;
        }
    }

    return (
        <section className='library__container'>
            <div className='library__text__container'>
                <h1 className='library__text__container__heading'><span className='library__text__container__logo'>Our</span> Library</h1>
                <p className='library__text__container__subheading__main'>Dive into the vast universe of books</p>
                <p className='library__text__container__subheading'>Our catalog is designed to be your ultimate destination for discovering, sharing, and discussing books of all kinds.</p>
            </div>

            <ul className='library__subNavigation'>
                <button onClick={getBooksHandler} className={genre === 'ALL' ? 'activeSubRoute library__subNavigation__item' : 'library__subNavigation__item'}>All</button>
                <button onClick={getBooksHandler} className={genre === 'FICTION' ? 'activeSubRoute library__subNavigation__item' : 'library__subNavigation__item'}>Fiction</button>
                <button onClick={getBooksHandler} className={genre === 'BIOGRAPHY' ? 'activeSubRoute library__subNavigation__item' : 'library__subNavigation__item'}>BIOGRAPHY</button>
                <button onClick={getBooksHandler} className={genre === 'SCIENCE-FICTION' ? 'activeSubRoute library__subNavigation__item' : 'library__subNavigation__item'}>SCIENCE-FICTION</button>
                <button onClick={getBooksHandler} className={genre === 'PSYCHOLOGY' ? 'activeSubRoute library__subNavigation__item' : 'library__subNavigation__item'}>PSYCHOLOGY</button>
            </ul>

            {/* TODO: set loader properly */}
            {fetching && <Loader/>}
        
            {books.length > 0
                ?
                (
                    <div className='library__card__container'>
                        {books.map((book) => (
                            <LibraryCard key={book._id} book={book} />
                        ))}
                    </div>
                )
                : (
                    <h1 className='library__card__container__empty'>{catalog.length > 0 ? `We do not currently have ${genre.toLowerCase()} books` : 'Our library is currently empty'}</h1>
                )}

        </section>
    )
}

export default Library;