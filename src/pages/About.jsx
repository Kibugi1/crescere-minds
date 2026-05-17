import MainLayout from "../layouts/MainLayout";
import AboutHero from "../components/about/AboutHero";
import WhoWeAre from "../components/about/WhoWeAre";
import MissionVision from "../components/about/MissionVision";
import WhoWeWalkWith from "../components/about/WhoWeWalkWith";

export default function About() {
    return (
        <MainLayout>
            <AboutHero />
            <WhoWeAre />
            <MissionVision />
            <WhoWeWalkWith />
        </MainLayout>
    );
}