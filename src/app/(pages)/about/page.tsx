import Hero from "@/components/shared/about/Hero";
import StatsSection from "@/components/shared/about/Stats";
import ValuesSection from "@/components/shared/about/Values";
import CTA from "@/components/shared/about/CTA";

export default function AboutPage() {
    return (
        <>
        <Hero/>
        <main>
            <StatsSection/>
            <ValuesSection/>
            <CTA/>
        </main>

        </>
    )
}

