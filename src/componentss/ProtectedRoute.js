import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ing, children}) =>{
    if (!ing) {
        console.log("El usuario no está autenticado");
        return <Navigate to={"/"}/>
    }

    return children;
}

export default ProtectedRoute;