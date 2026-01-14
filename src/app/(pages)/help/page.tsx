import Hero from "@/components/shared/Help/Hero";
import FeatureCategories from "@/components/shared/Help/FeatureCategories";
import CTA from "@/components/shared/Help/CTA";
import FAQ from "@/components/shared/Help/FAQ";

export default function Help() {
    return (
        <>
        <Hero/>
        <main>
            <FeatureCategories/>
            <FAQ/>
            <CTA/>
        </main>
        </>
    );
}
