import { Box } from "@mui/material";

import CategoriesHeader from
    "../../components/blogs/categories/CategoriesHeader";

import CategoriesForm from
    "../../components/blogs/categories/CategoriesForm";

import CategoriesTable from
    "../../components/blogs/categories/CategoriesTable";

export default function CategoriesPage() {

    return (

        <Box>

            <CategoriesHeader />

            <CategoriesForm />

            <CategoriesTable />

        </Box>

    );
}