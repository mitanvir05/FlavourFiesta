import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({children}) => {
    const {user,loading} = useAuth()
    
    const [isAdmin,isAdminLoading]=UseAdmin()
    const location = useLocation()
    if(loading || isAdminLoading){
        return
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/login" state={{from : location}} replace></Navigate>

};

export default AdminRoute;