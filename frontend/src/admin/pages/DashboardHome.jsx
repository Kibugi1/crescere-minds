import {
    Grid,
    Stack,
    Box,
} from "@mui/material";

import {
    FileText,
    MessageSquare,
    Mail,
    BookOpen,
} from "lucide-react";

import DashboardHeader from
    "../components/dashboard/DashboardHeader";

import StatsCard from
    "../components/dashboard/StatsCard";

import RecentActivity from
    "../components/dashboard/RecentActivity";

import MessagesPreview from
    "../components/dashboard/MessagesPreview";

import CommentsPreview from
    "../components/dashboard/CommentsPreview";

import ProgramOverview from
    "../components/dashboard/ProgramOverview";
import EngagementOverview from
    "../components/dashboard/EngagementOverview";

export default function DashboardHome() {

    return (

        <Box
            sx={{

                width: "100%",
            }}
        >

            {/* HEADER */}

            <DashboardHeader />



            {/* STATS GRID */}

            <Grid
                container

                spacing={{
                    xs: 2,
                    md: 3,
                }}

                sx={{
                    alignItems: "stretch",
                    width: "100%",
                }}
            >

                {/* TOTAL BLOGS */}

                <Grid
                    size={{
                        xs: 12,
                        sm: 6,
                        lg: 3,
                    }}
                >

                    <StatsCard
                        title="Total Blogs"
                        value="128"
                        growth="+12%"

                        icon={
                            <FileText size={24} />
                        }
                    />

                </Grid>



                {/* COMMENTS */}

                <Grid
                    size={{
                        xs: 12,
                        sm: 6,
                        lg: 3,
                    }}
                >

                    <StatsCard
                        title="Comments"
                        value="842"
                        growth="+18%"

                        icon={
                            <MessageSquare size={24} />
                        }
                    />

                </Grid>



                {/* MESSAGES */}

                <Grid
                    size={{
                        xs: 12,
                        sm: 6,
                        lg: 3,
                    }}
                >

                    <StatsCard
                        title="Unread Messages"
                        value="24"
                        growth="+5%"

                        icon={
                            <Mail size={24} />
                        }
                    />

                </Grid>



                {/* PROGRAMS */}

                <Grid
                    size={{
                        xs: 12,
                        sm: 6,
                        lg: 3,
                    }}
                >

                    <StatsCard
                        title="Programs"
                        value="16"
                        growth="+3%"

                        icon={
                            <BookOpen size={24} />
                        }
                    />

                </Grid>


            </Grid>

            {/* OPERATIONAL WIDGETS */}

            <Grid
                container

                spacing={{
                    xs: 2,
                    md: 3,
                }}

                sx={{
                    mt: 3,
                }}
            >

                {/* RECENT ACTIVITY */}

                <Grid
                    size={{
                        xs: 12,
                        sm: 6,
                        lg: 4,
                    }}
                >

                    <RecentActivity />

                </Grid>



                {/* MESSAGES PREVIEW */}

                <Grid
                    size={{
                        xs: 12,
                        sm: 6,
                        lg: 4,
                    }}
                >

                    <MessagesPreview />

                </Grid>



                {/* COMMENTS PREVIEW */}

                <Grid
                    size={{
                        xs: 12,
                        sm: 6,
                        lg: 4,
                    }}
                >

                    <CommentsPreview />

                </Grid>

            </Grid>

            {/* LOWER DASHBOARD SECTION */}

            <Grid
                container

                spacing={{
                    xs: 2,
                    md: 3,
                }}

                sx={{
                    mt: 4,
                }}
            >

                {/* PROGRAM OVERVIEW */}

                <Grid
                    size={{
                        xs: 12,
                        lg: 7,
                    }}
                >

                    <ProgramOverview />

                </Grid>



                {/* ENGAGEMENT OVERVIEW */}

                <Grid
                    size={{
                        xs: 12,
                        lg: 5,
                    }}
                >

                    <EngagementOverview />

                </Grid>

            </Grid>

        </Box>

    );
}