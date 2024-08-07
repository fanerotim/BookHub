import useProfile from '../../hooks/useProfile';
import './Profile.scss'
import { useEffect, useState } from 'react';
import LibraryCard from '../library/library-card/LibraryCard';
import DeleteProfileModal from './deleteProfileModal/DeleteProfileModal';

const Profile = () => {

    const { getUser } = useProfile();
    const [user, setUser] = useState(null)
    const [deleteModal, setDeleteModal] = useState(false);

    useEffect(() => {
        (async () => {
            const user = await getUser();
            setUser((prevUser) => user);
        })()
    }, [])

    function deleteHandler() {
        setDeleteModal((oldModal) => !oldModal)
    }

    return (
        <section className='profile__container'>

            <div className='profile__page__text__container'>
                <div className='profile__page__text__wrapper'>
                    <h1 className='profile__page__text__wrapper__heading'>Your Profile</h1>
                    <h2 className='profile__page__text__wrapper__subheading'>Dive into your personal library</h2>
                    <p className='profile__page__text__wrapper__description'>Here, you can find all the books you've liked and added to your collection.</p>
                </div>

                <div className='profile__information__card'>
                    <h1 className='profile__information__card__heading'>Account details</h1>

                    <div className='profile__information__card__username__container'>
                        <span className='profile__information__card__username__tag'>Username</span>
                        <h1 className='profile__information__card__username'>{user?.username}</h1>
                    </div>

                    <div className='profile__information__card__email__container'>
                        <span className='profile__information__card__email__tag'>Email</span>
                        <h1 className='profile__information__card__email'>{user?.email}</h1>
                    </div>

                    <div className='profile__information__card__added__liked__container'>
                        <div className='profile__information__card__addedBooks__container'>
                            <span className='profile__information__card__addedBooks__tag'>Added books</span>
                            <h1 className='profile__information__card__addedBooks__count'>{user && user.addedBooks.length}</h1>
                        </div>

                        <div className='profile__information__card__likedBooks__container'>
                            <span className='profile__information__card__likedBooks__tag'>Liked Books</span>
                            <h1 className='profile__information__card__likedBooks__count'>{user && user.likedBooks.length}</h1>
                        </div>
                    </div>
                    <button onClick={deleteHandler} className='profile__information__card__delete__btn'>Delete my account</button>
                </div>
            </div>

            <div className='profile__addedBooks__container'>
                <h1 className='profile__addedBooks__container__heading'>Books you added</h1>
                <p className='profile__addedBooks__container__description'>Here are the books you've added to your collection. Whether you're planning to read them soon or keeping them for later, they're all here. Keep in mind that if you need to edit or delete any of your books you can just click on it</p>
                <div className='profile__addedBooks__card__container'>
                    {user && user.addedBooks.map((book) => <LibraryCard key={book._id} book={book} />)}
                </div>
            </div>

            <div className='profile__likedBooks__container'>
                <h1 className='profile__likedBooks__container__heading'>Books you liked</h1>
                <p className='profile__likedBooks__container__description'>These are the books that have captured your interest. You can revisit your favorites anytime by logging in to your profile</p>
                <div className='profile__likedBooks__card__container'>
                    {user && user.likedBooks.map((book) => <LibraryCard key={book._id} book={book} />)}
                </div>
            </div>

            {deleteModal && <DeleteProfileModal props={{ deleteHandler }} />}
        </section>

    )
}

export default Profile;
