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

import BlogsPage from "../admin/pages/blogs/BlogsPage";

import CreateBlogPage from
    "../admin/pages/blogs/CreateBlogPage";

import CategoriesPage from
    "../admin/pages/blogs/CategoriesPage";

import ScrollToTop from "../components/layout/ScrollToTop";

import DraftsPage from "../admin/pages/blogs/DraftsPage";

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

                    <Route
                        path="blogs"
                        element={<BlogsPage />}
                    />

                    <Route
                        path="blogs/create"
                        element={<CreateBlogPage />}
                    />

                    <Route
                        path="blogs/categories"
                        element={<CategoriesPage />}
                    />

                    <Route
                        path="blogs/drafts"
                        element={<DraftsPage />}
                    />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}