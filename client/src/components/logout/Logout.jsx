import useLogout from "../../hooks/useLogout";

export const Logout = () => {

    const { logout } = useLogout();

    logout();

    // return (
    //     <>
    //     </>
    // )
}