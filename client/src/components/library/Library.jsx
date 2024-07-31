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
            console.log(allBooks);
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
            case 'BIOGRAPHY':
            case 'SCIENCE-FICTION':
            case 'PSYCHOLOGY':

                // adding this check as if there are no books in db .find will return an error an application will break
                if (catalog.length === 0) {
                    return;
                }

                const curBooks = catalog.find(book => book.genre.toLowerCase() === genre.toLowerCase())
    
                // this conditional checks if there are any books, if not then state is not updated.
                // this is needed as if there are no books find method returns undefined and that is then set as state which breaks logic
                if (curBooks) {
                    setBooks((oldBooks) => [curBooks]);
                }
                break;
            default:
                setBooks((oldBooks) => catalog);
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
                <h1 className='library__card__container__empty'>Our library is currently empty</h1>
            )}

        </section>
    )
}

export default Library;