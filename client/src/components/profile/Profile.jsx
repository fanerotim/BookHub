import useProfile from '../../hooks/useProfile';
import './Profile.scss'
import { useEffect, useState } from 'react';

const Profile = () => {

    const { getUser } = useProfile();
    const [user, setUser] = useState(null)

    useEffect(() => {
        (async () => {
            const user = await getUser();
            setUser((prevUser) => user);
        })()
    }, [])

    return (
        <section className='profile__container'>
            
            <div className='profile__information'>
            <h1>Account details</h1>
                <div>

                </div>

                <div className='profile__information__username__container'>
                    <span className='profile__information__username__tag'>Username</span>
                    <h1 className='profile__information__username'>{user?.username}</h1>
                    
                </div>

                <div className='profile__information__email__container'>
                    <span className='profile__information__email__tag'>Email</span>
                    <h1 className='profile__information__email'>{user?.email}</h1>
                </div>

                <p>Liked books: {user && user.likedBooks.length}</p>
                <p>Added books: {user && user.addedBooks.length}</p>
            </div>

            <div className='profile__likedAthletes__container'>

            </div>

            <div className='profile__addedAthletes__container'>

            </div>

        </section>
    )
}

export default Profile;
