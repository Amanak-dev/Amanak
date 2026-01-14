import Hero from "@/components/shared/Help/Hero";
import FeatureCategories from "@/components/shared/Help/FeatureCategories";
import CTA from "@/components/shared/Help/CTA";

export default function Help() {
    return (
        <>
        <Hero/>
        <main>
            <FeatureCategories/>
            <CTA/>
        </main>
        </>
    );
}
