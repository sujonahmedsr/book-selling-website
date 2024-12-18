import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const useAuth = () => {
    const currenUserInfo = useContext(AuthContext)
    return currenUserInfo
};

export default useAuth;