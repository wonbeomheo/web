import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import About from "./components/custom/About";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout><About/></Layout>}/>
            <Route path="/user-profile" element={<Layout><span>User Profile</span></Layout>}/>
            <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
    );
}

export default AppRoutes;