import './Library.scss';
import LibraryCard from './library-card/LibraryCard';
import useLibrary from '../../hooks/useLibrary';
import { useEffect, useState } from 'react';

const Library = () => {

    const [books, setBooks] = useState([]);
    const [genre, setGenre] = useState('ALL');
    // catalog contains all books in the db. it is used to keep all books and help me avoid making more than 1 request to db
    const [catalog, setCatalog] = useState([]);

    const { getAll } = useLibrary();

    useEffect(() => {
        (async () => {
            // only req to the db to get all books
            const allBooks = await getAll();
            // this state changes depending on genre and it is used to render books
            setBooks(oldBooks => allBooks)
            // keep all books in catalog state
            setCatalog(allBooks);
        })()
    }, [])

    async function getBooksHandler(e) {
        const genre = e.target.innerText;
        setGenre((oldGenre) => genre);

        switch (genre) {
            case 'FICTION':
            case 'CRIME':
                const curBooks = catalog.find(book => book.genre.toLowerCase() === genre.toLowerCase())
                setBooks((oldBooks) => [curBooks]);
                break;
            default:
                setBooks((oldBooks) => catalog);
        }
    }

    return (
        <section className='library__container'>
            <div className='library__text__container'>
                <h1 className='library__text__container__heading'><span className='library__text__container__logo'>Our </span>Library</h1>
                <p className='library__text__container__subheading__main'>Dive into the vast universe of books</p>
                <p className='library__text__container__subheading'>Our catalog is designed to be your ultimate destination for discovering, sharing, and discussing books of all kinds.</p>
            </div>

            <ul className='library__subNavigation'>
                <button onClick={getBooksHandler} className={genre === 'ALL' ? 'activeSubRoute library__subNavigation__item' : 'library__subNavigation__item'}>All</button>
                <button onClick={getBooksHandler} className={genre === 'FICTION' ? 'activeSubRoute library__subNavigation__item' : 'library__subNavigation__item'}>Fiction</button>
                <button onClick={getBooksHandler} className={genre === 'CRIME' ? 'activeSubRoute library__subNavigation__item' : 'library__subNavigation__item'}>Crime</button>
            </ul>

            <div className='library__card__container'>
                {books.map((book) => (
                    <LibraryCard key={book._id} book={book} />
                ))}
            </div>
        </section>
    )
}

export default Library;