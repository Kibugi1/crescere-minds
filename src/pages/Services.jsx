import MainLayout from "../layouts/MainLayout";

import ServicesHero from
    "../components/services/ServicesHero";

import ServicesGrid from
    "../components/services/ServicesGrid";

import SupportProcess from
    "../components/services/SupportProcess";

import WhySeekSupport from
    "../components/services/WhySeekSupport";

import ServicesCTA from
    "../components/services/ServicesCTA";

export default function Services() {
    return (
        <MainLayout>

            <ServicesHero />

            <ServicesGrid />

            <SupportProcess />

            <WhySeekSupport />

            <ServicesCTA />

        </MainLayout>
    );
}