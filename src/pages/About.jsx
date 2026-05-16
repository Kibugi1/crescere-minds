import MainLayout from "../layouts/MainLayout";
import AboutHero from "../components/about/AboutHero";
import WhoWeAre from "../components/about/WhoWeAre";

export default function About() {
    return (
        <MainLayout>
            <AboutHero />
            <WhoWeAre />
        </MainLayout>
    );
}