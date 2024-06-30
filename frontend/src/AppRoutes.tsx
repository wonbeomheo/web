import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Hero from "./components/custom/Hero";
import AdminLayout from "./layouts/AdminLayout";
import Login from "./pages/admin/Login";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout><Hero/></Layout>}/>
            <Route path="/admin" element={<AdminLayout><span>Admin Page</span></AdminLayout>}/>
            <Route path="/admin/login" element={<AdminLayout><Login/></AdminLayout>}/>
            <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
    );
}

export default AppRoutes;