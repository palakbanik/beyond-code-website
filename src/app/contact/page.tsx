import ContactSection from "@/components/pages/contact/ContactSection";
import FaqSection from "@/components/pages/contact/FaqSection";
import LeadershipSection from "@/components/pages/contact/LeadershipSection";

export default function page() {
    return (
        <section className="pt-24 md:pt-36 2xl:pt-50 pb-50 sm:pb-30 lg:pb-50">
            <ContactSection />
            <LeadershipSection />
            <FaqSection />
        </section>
    );
}
