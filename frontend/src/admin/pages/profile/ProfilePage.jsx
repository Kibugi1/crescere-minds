import {
    Box,
    Grid,
} from "@mui/material";

import ProfileHeader from
    "../../components/profile/ProfileHeader";

import ProfileAvatar from
    "../../components/profile/ProfileAvatar";

import ProfileForm from
    "../../components/profile/ProfileForm";

export default function ProfilePage() {

    return (

        <Box
            sx={{

                p: {
                    xs: 2,
                    md: 4,
                },

                backgroundColor:
                    "#F9FAFB",

                minHeight:
                    "100vh",
            }}
        >

            <ProfileHeader />



            <Grid
                container

                spacing={4}
            >

                {/* PROFILE IMAGE */}

                <Grid
                    size={{
                        xs: 12,
                        md: 4,
                    }}
                >

                    <ProfileAvatar />

                </Grid>



                {/* PROFILE FORM */}

                <Grid
                    size={{
                        xs: 12,
                        md: 8,
                    }}
                >

                    <ProfileForm />

                </Grid>

            </Grid>

        </Box>

    );
}