import useLogout from "../../hooks/useLogout";
import './Logout.scss'

export const Logout = () => {

    const { logout } = useLogout();

    logout();

    // return (
    //     <section className="spinner__container">
    //         <h1 className="spinner__text">Loading...</h1>
    //     </section>
    // )
}