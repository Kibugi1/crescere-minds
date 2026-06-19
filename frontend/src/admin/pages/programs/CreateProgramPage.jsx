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
        () => {

            const formData =
                buildProgramFormData(
                    "published"
                );

            console.log(
                "PUBLISH"
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

    const handleSaveDraft =
        () => {

            const formData =
                buildProgramFormData(
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