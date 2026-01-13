
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { STATS, StatItem } from "@/constants/about";

export default function StatsSection() {
    return (
        <section className="w-full py-12 bg-white">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {STATS.map(({ id, icon: Icon, count, label, bg, textColor, border }: StatItem) => (
                    <Card key={id} className={cn(
                        "bg-background rounded-xl py-6 border-0 border-r-4 cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl",
                        border
                    )}>
                        <CardContent className="flex flex-col items-center gap-4 ">
                            {/* Card Icon */}
                            <div
                                className={cn(
                                    "flex items-center justify-center w-12 h-12 rounded-full",
                                    bg
                                )}
                            >
                                <Icon size={20} className={textColor} />
                            </div>
                            {/* Card Title */}
                            <CardTitle className="text-2xl font-extrabold">{count}</CardTitle>
                            {/* Card Description */}
                            <CardDescription className="text-sm font-semibold text-center">{label}</CardDescription>
                        </CardContent>

                    </Card>

                ))}
            </div>
        </section>
    );
}
