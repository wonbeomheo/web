import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Hero from "./components/custom/Hero";
import AdminLayout from "./layouts/AdminLayout";
import Login from "./pages/admin/Login";
import Admin from "./pages/admin/Admin";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout><Hero/></Layout>}/>
            <Route path="/admin" element={<AdminLayout><Admin/></AdminLayout>}/>
            <Route path="/admin/login" element={<Login/>}/>
            <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
    );
}

export default AppRoutes;