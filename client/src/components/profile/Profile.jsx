import useProfile from '../../hooks/useProfile';
import './Profile.scss'
import { useEffect, useState } from 'react';

const Profile = () => {

    const {getUser} = useProfile();
    const [user, setUser] = useState(null)

    useEffect(() => {
        (async () => {
            const user = await getUser();
            setUser((prevUser) => user);
        })()
    }, [])

    return (
        <>
            <h1>Welcome to Profile page</h1>
        </>
    )
}

export default Profile;
