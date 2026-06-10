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

import ProgramsPage from "../admin/pages/programs/ProgramsPage";

import CreateProgramPage from "../admin/pages/programs/CreateProgramPage";

import MessagesPage from "../admin/pages/messages/MessagesPage";

import CommentsPage from "../admin/pages/comments/CommentsPage";

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

                    <Route
                        path="programs"
                        element={<ProgramsPage />}
                    />

                    <Route
                        path="programs/create"
                        element={<CreateProgramPage />}
                    />

                    <Route
                        path="messages"
                        element={<MessagesPage />}
                    />

                    <Route
                        path="comments"
                        element={<CommentsPage />}
                    />

                </Route>

            </Routes>
        </BrowserRouter>
    );
}