import {
    Box,
} from "@mui/material";

import CreateProgramHeader from
    "../../components/programs/create-program/CreateProgramHeader";

import ProgramForm from
    "../../components/programs/create-program/ProgramForm";

import ProgramEditor from "../../components/programs/create-program/ProgramEditor";

import ProgramImageUpload from "../../components/programs/create-program/ProgramImageUpload";

import ProgramActions from
    "../../components/programs/create-program/ProgramActions";

import { useState } from "react";

import axios from "axios"

export default function CreateProgramPage() {

    const [title, setTitle] = useState("");

    const [excerpt, setExcerpt] = useState("");

    const [category, setCategory] = useState("");

    const [description, setDescription] =
        useState("");

    const [publishLoading, setPublishLoading] = useState(false);

    const [draftLoading, setDraftLoading] = useState(false);

    const [
        featuredImage,
        setFeaturedImage,
    ] = useState(null);

    const buildProgramFormData =
        (status) => {

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
                "description",
                description
            );

            formData.append(
                "category",
                category
            );

            formData.append(
                "status",
                status
            );

            if (
                featuredImage
            ) {

                formData.append(
                    "image",
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
                    buildProgramFormData(
                        "published"
                    );

                const response =
                    await axios.post(

                        "http://127.0.0.1:5000/api/programs/create",

                        formData,

                        {

                            headers: {

                                Authorization:
                                    `Bearer ${token}`,

                                "Content-Type":
                                    "multipart/form-data",
                            },
                        }
                    );

                console.log(
                    response.data
                );

                alert(
                    "Program published successfully!"
                );

            } catch (error) {

                console.error(
                    error.response?.data ||
                    error
                );

                alert(
                    error.response?.data?.message ||
                    "Failed to publish program."
                );

            } finally {

                setPublishLoading(
                    false
                );
            }
        };

    const handleSaveDraft =
        async () => {

            try {

                setDraftLoading(
                    true
                );

                const token =
                    localStorage.getItem(
                        "token"
                    );

                const formData =
                    buildProgramFormData(
                        "draft"
                    );

                const response =
                    await axios.post(

                        "http://127.0.0.1:5000/api/programs/create",

                        formData,

                        {

                            headers: {

                                Authorization:
                                    `Bearer ${token}`,

                                "Content-Type":
                                    "multipart/form-data",
                            },
                        }
                    );

                console.log(
                    response.data
                );

                alert(
                    "Draft saved!"
                );

            } finally {

                setDraftLoading(
                    false
                );
            }
        };

    return (

        <Box>

            <CreateProgramHeader />

            <ProgramForm
                title={title}
                setTitle={setTitle}

                excerpt={excerpt}
                setExcerpt={setExcerpt}

                category={category}
                setCategory={setCategory}
            />

            <ProgramEditor
                value={description}

                onChange={
                    setDescription
                }
            />

            <ProgramImageUpload
                image={
                    featuredImage
                }

                setImage={
                    setFeaturedImage
                }
            />

            <ProgramActions
                onPublish={
                    handlePublish
                }

                onSaveDraft={
                    handleSaveDraft
                }

                publishLoading={
                    publishLoading
                }

                draftLoading={
                    draftLoading
                }
            />

        </Box>

    );
}