import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Programs from "../pages/Programs";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

import AdminLayout from
    "../admin/layouts/AdminLayout";

import DashboardHome from
    "../admin/pages/DashboardHome";

import ScrollToTop from "../components/layout/ScrollToTop";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/services" element={<Services />} />

                <Route path="/programs" element={<Programs />} />

                <Route path="/blog" element={<Blog />} />

                <Route path="/contact" element={<Contact />} />

                {/* ADMIN ROUTES */}

                <Route
                    path="/admin"
                    element={<AdminLayout />}
                >

                    <Route
                        path="dashboard"
                        element={<DashboardHome />}
                    />

                </Route>

            </Routes>
        </BrowserRouter>
    );
}