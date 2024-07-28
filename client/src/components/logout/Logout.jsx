import useLogout from "../../hooks/useLogout";
import './Logout.scss'

export const Logout = () => {

    const { logout } = useLogout();

    logout();
}