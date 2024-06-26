import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout.tsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout><span>Hello</span></Layout>}/>
            <Route path="/user-profile" element={<Layout><span>User Profile</span></Layout>}/>
            <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
    );
}

export default AppRoutes;