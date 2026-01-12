import { cn } from "@/lib/utils";
import type { StatItem } from "@/constants/about";

export default function StatCard({
    icon: Icon,
    count,
    label,
    bg,
    text,
    border,
}: StatItem) {


    return (
        <div
            className={cn(
                "bg-background rounded-xl flex flex-col items-center gap-4 py-6 border-r-4 shadow-xl cursor-pointer transform transition-all duration-300 hover:-translate-y-3 hover:scale-105",
                border
            )}
        >
            {/* Icon Circle */}
            <div
                className={cn(
                    "flex items-center justify-center w-12 h-12 rounded-full",
                    bg
                )}
            >
                <Icon size={20} className={text} />
            </div>

            {/* Count */}
            <p className="text-2xl font-extrabold">{count}</p>

            {/* Label */}
            <p className="text-sm font-semibold text-center">{label}</p>
        </div>
    );
}
