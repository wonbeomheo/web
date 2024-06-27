import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Landing from "./components/custom/Landing";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout><Landing/></Layout>}/>
            <Route path="/admin" element={<Layout><span>Admin Page</span></Layout>}/>
            <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
    );
}

export default AppRoutes;