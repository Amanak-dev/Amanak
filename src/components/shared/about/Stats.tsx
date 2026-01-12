import { STATS } from "@/constants/about";
import StatCard from "@/components/shared/about/StatCard";

export default function StatsSection() {
    return (
        <section className="w-full py-12 bg-white">
            <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {STATS.map((stat) => (
                    <StatCard key={stat.id} {...stat} />
                ))}
            </div>
        </section>
    );
}
