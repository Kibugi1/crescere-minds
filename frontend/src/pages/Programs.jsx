import MainLayout from "../layouts/MainLayout";
import ProgramsHero from "../components/programs/ProgramsHero";
import ProgramsGrid from "../components/programs/ProgramsGrid";
import ProgramsCTA from "../components/programs/ProgramsCTA";
import ProgramsImpact
    from "../components/programs/ProgramsImpact";
export default function Programs() {
    return (
        <MainLayout>
            <ProgramsHero />
            <ProgramsGrid />
            <ProgramsImpact />
            <ProgramsCTA />
        </MainLayout>
    );
}