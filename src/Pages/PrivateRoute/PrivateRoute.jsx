import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../providers/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
    const location = useLocation();
    if (loading) {
        return 
    }
    if (user) {
        return children
    }

    return <Navigate state={location?.pathname} to={'/signIn'} replace='true'></Navigate>;
};

export default PrivateRoute;