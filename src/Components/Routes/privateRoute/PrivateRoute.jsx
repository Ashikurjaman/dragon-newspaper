import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
const {user,loading} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-infinity loading-lg ml-28 w-60"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;