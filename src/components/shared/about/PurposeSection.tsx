
import PurposeLeftContent from "./PurposeLeftContent";
import PurposeRightContent from "./PurposeRightContent";

export default function PurposeSection() {
    return (
        <section className="py-16">
            <div className="container flex flex-col lg:flex-row  gap-8">
                {/* Right Content */}
                <PurposeRightContent/>
                {/* Left Content */}
                <PurposeLeftContent/>
            </div>
        </section>
    );

}