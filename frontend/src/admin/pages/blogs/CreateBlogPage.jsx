import CreateBlogHeader from
    "../../components/blogs/create-blog/CreateBlogHeader";

import BlogForm from
    "../../components/blogs/create-blog/BlogForm";

import BlogActions from
    "../../components/blogs/create-blog/BlogActions";

import BlogEditor from
    "../../components/blogs/create-blog/BlogEditor";

import FeaturedImageUpload from
    "../../components/blogs/create-blog/FeaturedImageUpload";

import { useState } from "react";

import axios from "axios";

export default function CreateBlogPage() {
    const [title, setTitle] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [featuredImage, setFeaturedImage] = useState(null);

    const [publishLoading,
        setPublishLoading] = useState(false);

    const [draftLoading, setDraftLoading] = useState(false);

    const buildBlogFormData = (
        status
    ) => {

        const formData =
            new FormData();

        formData.append(
            "title",
            title
        );

        formData.append(
            "excerpt",
            excerpt
        );

        formData.append(
            "category",
            category
        );

        formData.append(
            "content",
            content
        );

        formData.append(
            "status",
            status
        );

        if (
            featuredImage
        ) {

            formData.append(
                "featured_image",
                featuredImage
            );
        }

        return formData;
    };

    const handlePublish =
        async () => {

            try {

                setPublishLoading(
                    true
                );

                const token =
                    localStorage.getItem(
                        "token"
                    );

                const formData =

                    buildBlogFormData(

                        "published"
                    );

                const response =

                    await axios.post(

                        "http://127.0.0.1:5000/api/blogs/create",

                        formData,

                        {

                            headers: {

                                Authorization: `Bearer ${token}`,

                                "Content-Type": "multipart/form-data",
                            },
                        }
                    );

                console.log(

                    response.data
                );

                alert(

                    "Blog published successfully!"
                );

            } catch (error) {

                console.error(

                    error.response?.data ||

                    error
                );

                alert(

                    error.response?.data?.message ||

                    "Failed to publish blog."
                );

            } finally {

                setPublishLoading(
                    false
                );
            }
        };

    const handleSaveDraft =
        () => {

            const formData =
                buildBlogFormData(
                    "draft"
                );

            console.log(
                "DRAFT"
            );

            for (

                const [
                    key,
                    value,
                ]

                of

                formData.entries()

            ) {

                console.log(
                    key,
                    value
                );
            }
        };

    return (

        <>

            <CreateBlogHeader />

            <BlogForm

                title={title}
                setTitle={setTitle}

                excerpt={excerpt}
                setExcerpt={setExcerpt}

                category={category}
                setCategory={setCategory}

            />

            <BlogEditor
                value={content}
                onChange={setContent}
            />

            <FeaturedImageUpload
                image={featuredImage}
                setImage={setFeaturedImage}
            />

            <BlogActions
                onPublish={handlePublish}
                onSaveDraft={handleSaveDraft}
                publishLoading={publishLoading}
                draftLoading={draftLoading}
            />

        </>

    );
}