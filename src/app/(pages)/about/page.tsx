import Hero from "@/components/shared/about/Hero";
import StatsSection from "@/components/shared/about/Stats";
import ValuesSection from "@/components/shared/about/Values";
import TeamSection from "@/components/shared/about/Team";
import CTA from "@/components/shared/about/CTA";
import PurposeSection from "@/components/shared/about/PurposeSection";


export default function AboutPage() {
    return (
        <>
        <Hero/>
        <main>
            <StatsSection/>
            <PurposeSection/>
            <ValuesSection/>
            <TeamSection/>
            <CTA/>
        </main>

        </>
    )
}

