import MainLayout from "../layouts/MainLayout";
import AboutHero from "../components/about/AboutHero";
import WhoWeAre from "../components/about/WhoWeAre";
import MissionVision from "../components/about/MissionVision";
import WhoWeWalkWith from "../components/about/WhoWeWalkWith";
import CoreValues from "../components/about/CoreValues";
import WhyCrescereMinds from "../components/about/WhyCrescereMinds";
import FinalCTA from "../components/about/FinalCTA";


export default function About() {
    return (
        <MainLayout>
            <AboutHero />
            <WhoWeAre />
            <MissionVision />
            <WhoWeWalkWith />
            <CoreValues />
            <WhyCrescereMinds />
            <FinalCTA />
        </MainLayout>
    );
}