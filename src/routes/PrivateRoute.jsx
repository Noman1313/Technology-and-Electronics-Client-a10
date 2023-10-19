import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({ children }) => {

    const { user, loader } = useContext(AuthContext)

    const location = useLocation()

    if(loader){
        return <span className="loading loading-dots loading-lg"></span>
    }

    if(user){
        return children
    }

    return <Navigate state={location.pathname} to='/'></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes ={
    children: PropTypes.object
}