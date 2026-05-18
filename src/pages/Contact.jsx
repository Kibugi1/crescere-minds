import MainLayout from "../layouts/MainLayout";
import ContactHero from "../components/contact/ContactHero";
import ContactMethods from "../components/contact/ContactMethods";
import ContactFormSection from "../components/contact/ContactFormSection";
import ContactCTA from "../components/contact/ContactCTA";


export default function Contact() {
    return (
        <MainLayout>
            <ContactHero />
            <ContactMethods />
            <ContactFormSection />
            <ContactCTA />
        </MainLayout>
    );
}