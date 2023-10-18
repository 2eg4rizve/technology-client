/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";



const PivateRoute = ({children}) => {
    
    const {user,loading} =useAuth();

    console.log("loading  : ",loading);

    const location = useLocation();

    //need to wait here
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }


    // user cheek
    if(!user?.email){
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }


    return children
};

export default PivateRoute;