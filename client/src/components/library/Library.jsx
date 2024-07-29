import './Library.scss';
import LibraryCard from './library-card/LibraryCard';
import { NavLink } from 'react-router-dom';
import useLibrary from '../../hooks/useLibrary';
import { useEffect, useState } from 'react';

const Library = () => {

    const [books, setBooks] = useState([])
    
    const {getAll} = useLibrary();

    useEffect(() => {
        (async() => {
            const allBooks = await getAll();
            setBooks((oldBooks) => allBooks);
            
        })()
    }, [])

    return (
        <section className='library__container'>
            <div className='library__text__container'>
                <h1 className='library__text__container__heading'><span className='library__text__container__logo'>Our </span>Library</h1>
                <p className='library__text__container__subheading__main'>Dive into the vast universe of books</p>
                <p className='library__text__container__subheading'>Our catalog is designed to be your ultimate destination for discovering, sharing, and discussing books of all kinds.</p>
            </div>

            <ul className='library__subNavigation'>
               <NavLink className='library__subNavigation__item'>All</NavLink>
               <NavLink className='library__subNavigation__item'>Fiction</NavLink>
               <NavLink className='library__subNavigation__item'>Crime</NavLink> 
            </ul>

            <div className='library__card__container'>
                {books.map((book) => (
                    <LibraryCard book={book}/>
                ))}
            </div>
        </section>

    )
}

export default Library;