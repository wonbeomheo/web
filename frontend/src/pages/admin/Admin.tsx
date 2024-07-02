import { useAuth0 } from "@auth0/auth0-react";

const Admin = () => {
    const {user, isAuthenticated} = useAuth0();
    
    return (
        <div>
            {isAuthenticated? user?.email : "not authenticated"}
        </div>
    );
}

export default Admin